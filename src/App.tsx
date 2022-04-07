import React from "react";

import "./App.css";
import { Header } from "./components";
import AppRouter from "./components/AppRouter/AppRouter";
import NavModal from "./components/NavModal";

function App() {
	return (
		<div className="w-screen h-auto flex flex-col bg-primary-bg">
			<Header />
			<main className="">
				<AppRouter />
			</main>
			<NavModal />
		</div>
	);
}

export default App;
