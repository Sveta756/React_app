import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://www.ejin.ru/wp-content/uploads/2018/10/avatarki-dlya-skype1.jpeg" alt="photo" />
			{ props.message }
			<div>
				<span>{props.like} like</span>
			</div>
			
		</div>
	)
}

export default Post;