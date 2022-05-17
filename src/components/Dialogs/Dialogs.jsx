import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Dialogs = (props) => {

let dialogsElements = props.dialogs.map((dialog, i) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

let messagesElements = props.messages.map((el, i) => <Message key={el.id} message={el.message}/>);

let onAddMessage = () => {
	props.addMessage();
}
let onMessageChange = (e) => {
	let text = e.target.value;
	props.updateNewMessage(text);
}
if (!props.isAuth) return <Redirect to={'/login'}/>
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
			<div>
				<textarea onChange={onMessageChange} cols="30" rows="5" value={props.newMessage}></textarea>
				<button onClick={onAddMessage}>Add message</button>
			</div>
		</div>
	)
}

export default Dialogs;