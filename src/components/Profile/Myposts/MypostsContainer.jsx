import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';

// const MypostsContainer = (props) => {
// 	return (
// 	<StoreContext.Consumer> 
// 		{
// 			(store) => {
// 				let state = store.getState();
// 				let addPost = () => {
// 					store.dispatch(addPostActionCreator());
// 				}
// 				let onPostChange = (text) => { 
// 					store.dispatch(onPostChangeActionCreator(text));
// 				}
// 				return <Myposts updateNewPostText={onPostChange} 
// 				addPost={addPost} 
// 				posts={state.profilePage.posts} 
// 				newPostText={state.profilePage.newPostText}/>
// 			}
// 		}	
// 	</StoreContext.Consumer>
// 	)
// }

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (text) => {
			dispatch(onPostChangeActionCreator(text))
		}
	}
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;