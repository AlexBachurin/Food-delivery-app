import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalReducer from "./features/modal/modalSlice";
import authReducer from "./features/auth/authSlice";

// ...
const store = configureStore({
	reducer: {
		modal: modalReducer,
		auth: authReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
//hook for selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
