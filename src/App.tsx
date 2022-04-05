import React from "react";

import "./App.css";
import { Header } from "./components";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
	return (
		<div className="w-screen h-auto flex flex-col">
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;
