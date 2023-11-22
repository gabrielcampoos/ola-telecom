import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import OlaTelecom from '../../pages/OlaTelecom';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ola-telecom" element={<OlaTelecom />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
