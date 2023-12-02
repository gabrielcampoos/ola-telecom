import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Empresa from '../../pages/Empresa';
import Home from '../../pages/Home';
import OlaTelecom from '../../pages/OlaTelecom';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ola-telecom" element={<OlaTelecom />} />
				<Route path="/ola-telecom-empresa" element={<Empresa />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
