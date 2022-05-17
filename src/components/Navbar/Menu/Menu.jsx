import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<div className={s.itemWrapper}>
				<NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
			</div>
			<div className={s.itemWrapper}>
				<NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
			</div>
			<div className={s.itemWrapper}>
				<NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
			</div>
			<div className={s.itemWrapper}>
				<NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
			</div>
			<div className={s.itemWrapper}>
				<NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
			</div>
			<div className={s.itemWrapper}>
				<NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Menu;