import React, { FC, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderNav from "./HeaderNav";
import { useAppDispatch, useAppSelector } from "../../store";
import { openModal } from "../../features/modal/modalSlice";
import { login, logout } from "../../features/auth/authSlice";
import avatar from "../../img/avatar.jpg";

const Header: FC = () => {
	const dispatch = useAppDispatch();

	const { user, isAuthenticated } = useAppSelector((state) => state.auth);

	const [showLogout, setShowLogout] = useState(false);

	const displayLogout = () => {
		setShowLogout(!showLogout);
	};
	return (
		<header className="fixed  z-40 w-screen p-6 lg:px-16 md:px-8 bg-primary-bg text-header-text">
			{/* desktop and tablet */}
			<div className="hidden md:flex lg:flex  items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="w-8">
						<img
							src="https://restaurantapp-c2ed6.web.app/static/media/logo.0f99324454e3c3ccba98.png"
							alt="logo"
							className="w-full h-full object-cover cursor-pointer"
						/>
					</div>
					<span className="text-black font-bold">City</span>
				</div>
				<nav className="flex justify-between items-center">
					<HeaderNav />
					<div className="flex items-center justify-end gap-8">
						<div className="cursor-pointer">
							<BsFillCartPlusFill className="text-[30px] text-black" />
						</div>
						<div
							onClick={user ? displayLogout : () => dispatch(login())}
							className="w-8 cursor-pointer relative"
						>
							<img
								src={user?.photoURL ? user.photoURL : avatar}
								alt="avatar"
								className="w-full h-full object-cover"
							/>
							<div
								className={`${
									showLogout
										? "w-40 bg-gray-400 shadow-xl flex flex-col absolute top-12 right-0 cursor-pointer opacity-100"
										: "w-40 bg-gray-400 shadow-xl flex-col absolute top-12 right-0 cursor-pointer opacity-0 hidden"
								}`}
								onClick={() => dispatch(logout())}
							>
								<p className="p-3">logout</p>
							</div>
						</div>
					</div>
				</nav>
			</div>
			{/* mobile */}
			<div className="flex justify-between items-center md:hidden lg:hidden">
				<AiOutlineMenu
					onClick={() => dispatch(openModal(true))}
					className="text-[26px] text-black cursor-pointer"
				/>
				<div className="w-8 h-8">
					<img
						src="https://restaurantapp-c2ed6.web.app/static/media/logo.0f99324454e3c3ccba98.png"
						alt="logo"
						className="w-full object-cover cursor-pointer"
					/>
				</div>
				<div className="flex items-center justify-between gap-3">
					<div className="w-8 h-8 cursor-pointer">
						<img
							onClick={() => dispatch(login())}
							src={user?.photoURL ? user.photoURL : avatar}
							alt="avatar"
							className="w-100 h-auto object-cover"
						/>
					</div>
					<div className="cursor-pointer">
						<BsFillCartPlusFill className="text-[30px]" />
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };
