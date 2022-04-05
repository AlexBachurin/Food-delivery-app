import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import HomePage from "../../pages/HomePage";

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
		</Routes>
	);
};

export default AppRouter;
