import s from './FriendsOnline.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/user.png';

const FriendsOnline = (props) => {
	let arr = props.users.slice(0, 5);
	return (
		<div>
		{
			arr.map(u => <div key={u.id}>
				<NavLink to={'/profile/' + u.id} className={s.card}>
					<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo" />
					<div>{u.name}</div>
				</NavLink>
			</div>)
		}
		</div>	
	)
}

export default FriendsOnline; 