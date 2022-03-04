import s from './FriendsOnline.module.css';

const FriendsOnline = (props) => {
	return (
		<div className={s.card}>
			<img src={props.img} alt="photo" />
			<div>{props.name}</div>
		</div>
	)
}

export default FriendsOnline;