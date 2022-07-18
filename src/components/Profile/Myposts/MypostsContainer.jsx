import {addPost} from '../../../redux/profile-reducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addPost: () => {
// 			dispatch(addPostActionCreator())
// 		},
// 		updateNewPostText: (text) => {
// 			dispatch(onPostChangeActionCreator(text))
// 		}
// 	}
// }

const MypostsContainer = connect(mapStateToProps, {addPost})(Myposts);

export default MypostsContainer;