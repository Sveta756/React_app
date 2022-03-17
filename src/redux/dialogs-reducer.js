/* eslint-disable default-case */
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
	messages: [
	{id: 1, message: 'hi'}, 
	{id: 2, message: 'How are u?'}, 
	{id: 3, message: 'good morning'}, 
	{id: 4, message: 'miss you'}
	],
	newMessage: '',
	dialogs: [
		{id: 1, name: 'Dima'}, 
		{id: 2, name: 'Sveta'}, 
		{id: 3, name: 'Ivan'}, 
		{id: 4, name: 'Kate'}
	]
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: 
			let newMessage = state.newMessage;
			return {
				...state,
				newMessage: '',
				messages: [...state.messages, {id: 6, message: newMessage}],
			};
		case UPDATE_NEW_MESSAGE: 
			return {
				...state,
				newMessage: action.newMessage
			};
		default:
			return state;	
	}

}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreator = (text) => 
	({type: UPDATE_NEW_MESSAGE, newMessage: text})

export default dialogsReducer;