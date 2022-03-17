import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/dialogs-reducer';
// import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

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