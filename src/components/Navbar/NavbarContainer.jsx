import Navbar from "./Navbar";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		friendsOnline: state.sidebar.friendsOnline,
		newPostText: state.profilePage.newPostText
	}
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;