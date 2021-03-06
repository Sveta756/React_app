import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload
			};
		}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })


export const auth = () => {
	return (dispatch) => {
		return usersAPI.auth()
		.then(response => {
			if(response.data.resultCode === 0) {
				let {id, email, login} = response.data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		});		
	}
} 


export const login = (email, password, rememberMe, setStatus) => {
	return (dispatch) => {
		usersAPI.login(email, password, rememberMe)
		.then(response => {
			if(response.data.resultCode === 0) {
				dispatch(auth())
			} else {
				setStatus(response.data.messages)
			}
		});		
	}
} 

export const logout = () => {
	return (dispatch) => {
		usersAPI.logout()
		.then(response => {
			if(response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false));
			}
		});		
	}
} 

	
export default authReducer;