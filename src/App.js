import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Routes, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<NavbarContainer/>
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='dialogs/*' element={<DialogsContainer/>}/>
					<Route path='/profile/*' element={<ProfileContainer/>}/>
					<Route path='/users' element={<UsersContainer/>}/>
				</Routes>
			</div>
		</div>
  	)
}

export default App;
