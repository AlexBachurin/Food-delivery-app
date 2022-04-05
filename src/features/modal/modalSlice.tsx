import { createSlice } from "@reduxjs/toolkit";

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
		openModal: (state, action) => {
			console.log("open");
			state.isOpen = true;
		},
		closeModal: (state, action) => {
			console.log("close");
			state.isOpen = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
