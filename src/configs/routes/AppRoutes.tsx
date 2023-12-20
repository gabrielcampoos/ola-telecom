import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Avisos } from '../../pages/Avisos';
import Empresa from '../../pages/Empresa';
import Home from '../../pages/Home';
import { MitoFibra } from '../../pages/MitoFibra';
import OlaTelecom from '../../pages/OlaTelecom';
import { SenhaSegura } from '../../pages/SenhaSegura';
import { Suporte } from '../../pages/Suporte';
import { TrabalheConosco } from '../../pages/TrabalheConosco';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ola-telecom" element={<OlaTelecom />} />
				<Route path="/ola-telecom-empresa" element={<Empresa />} />
				<Route path="/ola-telecom-mito-fibra" element={<MitoFibra />} />
				<Route path="/ola-telecom-suporte" element={<Suporte />} />
				<Route path="/ola-telecom-avisos" element={<Avisos />} />
				<Route
					path="/ola-telecom-senha-segura"
					element={<SenhaSegura />}
				/>
				<Route
					path="/ola-telecom-trabalhe-conosco"
					element={<TrabalheConosco />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
