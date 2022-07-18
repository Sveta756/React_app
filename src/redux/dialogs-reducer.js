const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	messages: [
	{id: 1, message: 'hi'}, 
	{id: 2, message: 'How are u?'}, 
	{id: 3, message: 'good morning'}, 
	{id: 4, message: 'miss you'}
	],
	dialogs: [
		{id: 1, name: 'Dima'}, 
		{id: 2, name: 'Sveta'}, 
		{id: 3, name: 'Ivan'}, 
		{id: 4, name: 'Kate'}
	]
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: 
			let body = action.newMessage;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: body}],
			};
		default:
			return state;	
	}

}
export const addMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage })

export default dialogsReducer;