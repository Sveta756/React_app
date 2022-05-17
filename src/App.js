import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer/>
			<NavbarContainer/>
			<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <DialogsContainer/>}/>
					<Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
					<Route path='/users' render={() => <UsersContainer/>}/>
					<Route path='/login' render={() => <Login/>}/>
			</div>
		</div>
  	)
}

export default App;
