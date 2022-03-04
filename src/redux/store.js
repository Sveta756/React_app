import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';


let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 5}, 
				{id: 2, message: 'It is my first post', likesCount: 3}
			],
			newPostText: ''
		},
		dialogsPage: {
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
			], 
		},
		sidebar: {
			friendsOnline: [
				{img: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-28.jpg', name: 'Sveta'},
				{img: 'https://ru-static.z-dn.net/files/d97/02b92fabb9aba739fbec8749143646b1.jpeg', name: 'Ivan'},
				{img: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-59.jpg', name: 'Dima'}
			]
		}
	},
	_callSubscriber() {
		console.log('hi')
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state);
	}
	

}

export default store;
window.store = store;