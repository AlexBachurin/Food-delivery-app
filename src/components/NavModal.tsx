import React, { FC } from "react";
import HeaderNav from "./Header/HeaderNav";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAppSelector } from "../store";

const NavModal: FC = () => {
	const isModalOpen = useAppSelector((state) => state.modal.isOpen);
	console.log(isModalOpen);
	return (
		<>
			{isModalOpen ? (
				<aside className="absolute top-0 left-0 w-screen h-screen bg-slate-400 z-50 transition-all">
					<HeaderNav />
					<AiOutlineClose className="absolute right-3 top-3 text-black text-[26px] cursor-pointer" />
				</aside>
			) : null}
		</>
	);
};

export default NavModal;
