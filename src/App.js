import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {
	debugger;
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if(!this.props.initialized) {
			return <Preloader/>
		} else {
			return (
				<div className='app-wrapper'>
					<HeaderContainer/>
					<NavbarContainer/>
					<div className='app-wrapper-content'>
							<Route path='/dialogs' render={() => <DialogsContainer/>}/>
							<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
							<Route path='/users' render={() => <UsersContainer/>}/>
							<Route path='/login' render={() => <Login/>}/>
					</div>
				</div>
			  ) 
		}
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
