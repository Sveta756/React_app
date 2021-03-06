import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import { withaAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 22943;
		} 
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus}/>
		)
	}
	
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
});

export default compose(
	connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
	withRouter,
	withaAuthRedirect
)(ProfileContainer)

	

// let AuthRedirectComponent = withaAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);