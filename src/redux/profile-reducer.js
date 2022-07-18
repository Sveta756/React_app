import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 5}, 
		{id: 2, message: 'It is my first post', likesCount: 3}
	],
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {

	// eslint-disable-next-line default-case
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.post,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost]
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}

		default:
			return state;
	}
}

export const addPost = (post) => ({ type: ADD_POST, post })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			});			
	}
} 

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setStatus(response.data));
			});			
	}
} 


export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});			
	}
} 
	
export default profileReducer;