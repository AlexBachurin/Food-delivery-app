import React, { FC } from "react";
import HeaderNav from "./Header/HeaderNav";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../store";
import { closeModal } from "../features/modal/modalSlice";

const NavModal: FC = () => {
	const isModalOpen = useAppSelector((state) => state.modal.isOpen);
	const dispatch = useAppDispatch();
	return (
		<>
			<aside
				className={`${
					isModalOpen
						? "translate-x-0 fixed top-0 left-0 w-full h-full  z-50 transition-all ease-in duration-300 sm:hidden bg-primary-bg"
						: "fixed top-0 left-0 w-full h-full  z-50 transition-all translate-left ease-in duration-300 bg-primary-bg"
				}`}
			>
				<HeaderNav />
				<AiOutlineClose
					onClick={() => dispatch(closeModal(false))}
					className="absolute right-3 top-3 text-black text-[26px] cursor-pointer"
				/>
			</aside>
		</>
	);
};

export default NavModal;
