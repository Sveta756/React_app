import s from './Navbar.module.css';
import Menu from './Menu/Menu';
import FriendsOnline from './FriendsOnline/FriendsOnline';


const Navbar = (props) => {
	let friendsOnlineElem = props.friendsOnline.map(el => <FriendsOnline name={el.name} img={el.img}/>)
	return (
		<div className={s.nav}>
			<Menu/>
			{friendsOnlineElem}
		</div>
	)
}

export default Navbar;