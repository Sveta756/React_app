import {addMessage, onMessageChange} from '../../redux/dialogs-reducer';
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

const DialogsContainer = connect(mapStateToProps, {addMessage,updateNewMessage: onMessageChange})(Dialogs);

export default DialogsContainer;