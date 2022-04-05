import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initState {
	isOpen: boolean;
}

const initialState: initState = {
	isOpen: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<boolean>) => {
			console.log("open");
			state.isOpen = action.payload;
		},
		closeModal: (state, action: PayloadAction<boolean>) => {
			console.log("close");
			state.isOpen = action.payload;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
