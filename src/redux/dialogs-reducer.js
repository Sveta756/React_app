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
			let newMessage = {
				id: 5,
				message: state.newMessage
			}
			state.messages.push(newMessage);
			state.newMessage = '';
		return state;
		case UPDATE_NEW_MESSAGE:
			state.newMessage = action.newMessage;
			return state;
		default:
			return state;	
	}

}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreator = (text) => 
	({type: UPDATE_NEW_MESSAGE, newMessage: text})

export default dialogsReducer;