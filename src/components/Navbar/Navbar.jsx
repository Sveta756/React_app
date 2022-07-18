import s from './Navbar.module.css';
import Menu from './Menu/Menu';
import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer';


const Navbar = () => {
	return (
		<div className={s.nav}>
			<Menu/>
			<FriendsOnlineContainer />
		</div>
	)
}

export default Navbar;