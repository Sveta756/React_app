import s from './ProfileInfo.module.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) =>  {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status]);

	const activateMode = () => {
		setEditMode(true)
	}
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status);
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode &&
				<div className={s.status} onDoubleClick={activateMode}>
					<span>{props.status || "нет статуса"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} autoFocus={true} value={status} className={s.status} onBlur={deactivateEditMode}/>
				</div>
			}
			
		</div>
	)
}

export default  ProfileStatusWithHooks;