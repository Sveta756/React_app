import Navbar from "./Navbar";
import { connect } from 'react-redux';


// const NavbarContainer = (props) => {
	
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					let state = store.getState();
// 					return (<Navbar friendsOnline={state.sidebar.friendsOnline}/>)
// 				}	
// 			}
// 		</StoreContext.Consumer>
// 	)
// }
const mapStateToProps = (state) => {
	return {
		friendsOnline: state.sidebar.friendsOnline,
		newPostText: state.profilePage.newPostText
	}
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;