import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
	return (
		<header className={s.header}>
			<img src='http://demo.foxthemes.net/instellohtml/assets/images/logo.png'/>
			<div className={s.loginBlock}>
				{props.isAuth ?
				 <div>{props.login} - <button onClick={props.logout}>LogOut</button></div> 
				 : <NavLink to={'/login'}>Login</NavLink>} 
				
			</div>
		</header>
	)
}

export default Header;