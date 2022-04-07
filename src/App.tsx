import React from "react";

import "./App.css";
import { Header } from "./components";
import AppRouter from "./components/AppRouter/AppRouter";
import NavModal from "./components/NavModal";
import { AnimatePresence } from "framer-motion";
function App() {
	return (
		<AnimatePresence exitBeforeEnter>
			<div className="w-screen h-auto flex flex-col bg-primary-bg">
				<Header />
				<main className="">
					<AppRouter />
				</main>
				<NavModal />
			</div>
		</AnimatePresence>
	);
}

export default App;
