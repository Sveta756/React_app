import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';

const Users = (props) => {
	// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i =1; i < 11; i++) {
		pages.push(i);
	}
 return (
	<div className={s.wrapper}>
		<div className={s.navWrapper}>
			{pages.map(p => {
				return <div className={props.currentPage === p ? s.selectedPage : s.nav} onClick={()=> {props.onPageChanged(p)}}><span>{p}</span></div>
			})}
		</div>
	{
	props.users.map(u => <div key={u.id}>
		<span>
			<div>
				<NavLink to={'/profile/' + u.id}>
					<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
				</NavLink>
			</div>
			<div>
				{u.followed 
				? <button className={s.btn} onClick={()=> { props.unfollow(u.id)}}>Unfollow</button> 
				: <button className={s.btn} onClick={()=> { props.follow(u.id)}}>Follow</button>}
			</div>
		</span>
		<span>
			<span>
				<div>{u.name}</div>
				<div>{u.status}</div>
			</span>
			<span>
				<div>{"u.location.country"}</div>
				<div>{"u.location.city"}</div>
			</span>
		</span>
	</div>)
	}	
	</div>	
 )
}

export default Users;