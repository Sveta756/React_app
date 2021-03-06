import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import usersReducer from './users-reducers.js';
import authReducer from './auth-reducer.js';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer } from 'redux-form';
import AppReducer from './app-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: AppReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;