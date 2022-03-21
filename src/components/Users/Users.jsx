import s from './Users.module.css';


let Users = (props) => {

	if(props.users.length === 0) {
		props.setUsers([
			{id: 1, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLSwyD4seSKB-Eps3-2cuH5YeGNE1cM4C7Fkwxs5=s900-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Svetlana', status: 'Hello!', location: {city: 'Moscow', country: 'Russia'}}, 
			{id: 2, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLSwyD4seSKB-Eps3-2cuH5YeGNE1cM4C7Fkwxs5=s900-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Yuri', status: 'I am good boy', location: {city: 'NN', country: 'Russia'}}, 
			{id: 3, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLSwyD4seSKB-Eps3-2cuH5YeGNE1cM4C7Fkwxs5=s900-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Kate', status: 'Relax', location: {city: 'Minsk', country: 'Belarus'}}, 
			{id: 4, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLSwyD4seSKB-Eps3-2cuH5YeGNE1cM4C7Fkwxs5=s900-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Roman', status: 'How are you?', location: {city: 'Moscow', country: 'Russia'}}
		])
	}

	return <div>
	{
		props.users.map(u => <div key={u.id}>
			<span>
				<div>
					<img className={s.userPhoto} src={u.photoUrl} alt="" />
				</div>
				<div>
					{u.followed 
					? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button> 
					: <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
				</div>
			</span>
			<span>
				<span>
					<div>{u.fullName}</div>
					<div>{u.status}</div>
				</span>
				<span>
					<div>{u.location.country}</div>
					<div>{u.location.city}</div>
				</span>
			</span>
		</div>)
		
	}	
	</div>	
}

export default Users;