import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/dialogs-reducer';
// import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
// 	return (
// 	<StoreContext.Consumer> 
// 		{
// 			(store) => {
// 				let state = store.getState();
// 				let addMessage = () => {
// 					store.dispatch(addMessageActionCreator());
// 				}
// 				let updateNewMessage = (text) => {
// 					store.dispatch(onMessageChangeActionCreator(text));
// 				}
// 				return <Dialogs addMessage={addMessage} updateNewMessage={updateNewMessage} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessage={state.dialogsPage.newMessage}/>
// 			}
// 		}
// 	</StoreContext.Consumer>	
// 	)
// }

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessage: state.dialogsPage.newMessage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator())
		},
		updateNewMessage: (text) => {
			dispatch(onMessageChangeActionCreator(text))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;