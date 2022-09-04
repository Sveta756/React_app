import profileReducer, { addPost } from "./profile-reducer";

test('length of posts should be incremented', () => {
	// test data
	let action = addPost('it-kamasutra.com');
	let state = {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 5}, 
			{id: 2, message: 'It is my first post', likesCount: 3}
		]
	}
	// action
	let newState = profileReducer(state, action);

	//expectation
	expect(newState.posts.length).toBe(3);
  });