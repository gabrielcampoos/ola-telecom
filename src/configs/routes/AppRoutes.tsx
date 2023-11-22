import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Home />} />
				<Route path="/sobre" element={<NossaHistoria />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
