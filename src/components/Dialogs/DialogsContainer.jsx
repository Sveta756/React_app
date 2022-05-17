import {addMessage, onMessageChange} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withaAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessage: state.dialogsPage.newMessage
	}
}

let AuthRedirectComponent = withaAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {addMessage,updateNewMessage: onMessageChange})(AuthRedirectComponent);

export default DialogsContainer;