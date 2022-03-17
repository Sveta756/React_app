import s from './Myposts.module.css'
import Post from './Post/Post';
import React from 'react';


const Myposts = (props) => {

	let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = () => { 
		let text = newPostElement.current.value;
		props.updateNewPostText(text)
	}
	return (
		<div className={s.descriptionBlock}>
			<h2>my posts</h2>
			<div>
				<div>
					<textarea onChange={onPostChange} cols="30" rows="5" ref={newPostElement} value={props.newPostText}/>
				</div>
				<button onClick={onAddPost}>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				{postsElement}
			</div>
		</div>
	)
}

export default Myposts;