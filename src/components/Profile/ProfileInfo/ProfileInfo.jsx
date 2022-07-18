import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader/>
	} else 
	return (
		<div>
			<div>
				<img className={s.image} src='https://catherineasquithgallery.com/uploads/posts/2021-02/1614380981_72-p-svetlo-fioletovii-fon-dlya-prezentatsii-75.jpg'/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="photo" className={s.avaImg}/>
				<div>
					<div className={s.status}>{props.profile.fullName}</div>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
				</div>
			</div>
		</div>
	)
}

export default  ProfileInfo;