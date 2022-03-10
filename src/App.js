import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Routes, Route} from 'react-router-dom';


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<NavbarContainer/>
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='dialogs/*' element={<DialogsContainer/>}/>
					<Route path='/profile' element={<Profile/>}/>
				</Routes>
			</div>
		</div>
  	)
}

export default App;
