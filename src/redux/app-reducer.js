import { auth } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
	initialized: false
}

const AppReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_INITIALIZED: {
			return {
				...state,
				initialized: true
			};
		}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED })


export const initializeApp = () => {
	return (dispatch) => {
		let promise = dispatch(auth());
		Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		})
	}
} 


	
export default AppReducer;