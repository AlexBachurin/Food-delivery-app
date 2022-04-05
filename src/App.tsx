import React from "react";

import "./App.css";
import { Header } from "./components";
import AppRouter from "./components/AppRouter/AppRouter";
import NavModal from "./components/NavModal";

function App() {
	return (
		<main className="relative w-screen h-auto flex flex-col bg-primary-bg">
			<Header />
			<NavModal />
			<AppRouter />
		</main>
	);
}

export default App;
