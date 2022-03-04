import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={s.image} src='https://catherineasquithgallery.com/uploads/posts/2021-02/1614380981_72-p-svetlo-fioletovii-fon-dlya-prezentatsii-75.jpg'/>
			</div>
			<div className={s.descriptionBlock}>
				ava + desc
			</div>
		</div>
	)
}

export default  ProfileInfo;