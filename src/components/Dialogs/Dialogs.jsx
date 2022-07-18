import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import MessageForm from './MessageForm/MessageForm';


const Dialogs = (props) => {

let dialogsElements = props.dialogs.map((dialog, i) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

let messagesElements = props.messages.map((el, i) => <Message key={el.id} message={el.message}/>);

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
				<MessageForm onAddMessage={props.addMessage}/>
			</div>
		</div>
	)
}

export default Dialogs;