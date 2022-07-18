import {addMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withaAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessage: state.dialogsPage.newMessage
	}
}

export default compose(
	connect(mapStateToProps, {addMessage}),
	withaAuthRedirect
)(Dialogs);