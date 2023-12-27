import { combineReducers } from '@reduxjs/toolkit';
import notificationSlice from './Notification/notificationSlice';
import osSlice from './Os/osSlice';
import usuarioSlice from './Usuario/usuarioSlice';

const rootReducer = combineReducers({
	// a cada novo slice, adicionamos uma nova propriedade neste objeto
	// propriedade - nome na store
	// valor - reducer/manager deste estado global
	os: osSlice,
	notification: notificationSlice,
	usuario: usuarioSlice,
});

export default rootReducer;
