import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
let state = props.store.getState();

let addMessage = () => {
	props.store.dispatch(addMessageActionCreator());
}
let updateNewMessage = (text) => {
	props.store.dispatch(onMessageChangeActionCreator(text));
}
	return (<Dialogs addMessage={addMessage} updateNewMessage={updateNewMessage} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessage={state.dialogsPage.newMessage}/>)
}

export default DialogsContainer;