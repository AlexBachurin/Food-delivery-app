import React, { FC, useEffect, useRef, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderNav from "./HeaderNav";
import { useAppDispatch, useAppSelector } from "../../store";
import { openModal } from "../../features/modal/modalSlice";
import { login, logout } from "../../features/auth/authSlice";
import avatar from "../../img/avatar.jpg";
import { motion } from "framer-motion";

const Header: FC = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);

	const [showLogout, setShowLogout] = useState(false);

	const displayLogout = () => {
		setShowLogout(!showLogout);
	};

	//close dropdown on outside click
	const dropdownRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (
				showLogout &&
				dropdownRef.current &&
				!dropdownRef?.current?.contains(e.target as Node)
			) {
				setShowLogout(false);
			}
		};

		//event to check for mouse outside of menu
		document.addEventListener("mousedown", checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [showLogout]);
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
							<motion.img
								whileTap={{ scale: 0.6 }}
								src={user?.photoURL ? user.photoURL : avatar}
								alt="avatar"
								className="w-full h-full object-cover"
							/>
							{showLogout && (
								<motion.div
									ref={dropdownRef}
									initial={{ opacity: 0, scale: 0.6 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.6 }}
									className="w-40 bg-gray-50 shadow-x flex flex-col absolute top-12 right-0 cursor-pointer opacity-100 before:block before:absolute before:w-0 before:h-0 before:right-2 before:top-[-8px] before:border-l-[5px] before:border-r-[5px] before:border-b-[5px] before:border-l-transparent before:border-r-transparent before:border-b-black"
								>
									<p className="p-3 hover:bg-gray-200 transition-all ease-in-out">
										cart
									</p>
									<p
										onClick={() => {
											dispatch(logout());
											setShowLogout(false);
										}}
										className="p-3 hover:bg-gray-200 transition-all ease-in-out"
									>
										logout
									</p>
								</motion.div>
							)}
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
					<div className="w-8 h-8 cursor-pointer relative">
						<motion.img
							whileTap={{ scale: 0.6 }}
							onClick={user ? displayLogout : () => dispatch(login())}
							src={user?.photoURL ? user.photoURL : avatar}
							alt="avatar"
							className="w-100 h-auto object-cover"
						/>
						{showLogout && (
							<motion.div
								ref={dropdownRef}
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className="w-40 transition-all ease-in-out bg-gray-50 shadow-x flex flex-col absolute top-12 right-0 cursor-pointer opacity-100 before:block before:absolute before:w-0 before:h-0 before:right-2 before:top-[-8px] before:border-l-[5px] before:border-r-[5px] before:border-b-[5px] before:border-l-transparent before:border-r-transparent before:border-b-black"
							>
								<p className="p-3 hover:bg-gray-200 transition-all ease-in-out">
									cart
								</p>
								<p
									onClick={() => {
										dispatch(logout());
										setShowLogout(false);
									}}
									className="p-3 hover:bg-gray-200 transition-all ease-in-out"
								>
									logout
								</p>
							</motion.div>
						)}
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
