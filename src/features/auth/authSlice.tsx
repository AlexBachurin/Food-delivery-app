import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

interface initState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: IUser | null;
}

interface IUser {
	displayName: string | null;
	email: string | null;
	phoneNumber?: string | null;
	photoURL: string | null;
}

type LoginError = {
	message: string;
};

const initialState: initState = {
	isAuthenticated: false,
	isLoading: false,
	user: {} as IUser,
};

export const login = createAsyncThunk("auth/login", async () => {
	console.log("click");

	const res = await signInWithPopup(auth, provider);
	const { providerData } = res.user;
	if (res.user) {
		const userData: IUser = {
			displayName: providerData[0].displayName,
			email: providerData[0].email,
			photoURL: providerData[0].photoURL,
		};

		return userData;
	}

	return null;
});

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
