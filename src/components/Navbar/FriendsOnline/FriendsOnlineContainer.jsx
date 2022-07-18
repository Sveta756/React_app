import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/users-reducers';
import { compose } from 'redux';
import FriendsOnline from './FriendsOnline';
import { withaAuthRedirect } from '../../../hoc/withAuthRedirect';


class FriendsOnlineContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers();
	}
	render() {
		return <FriendsOnline users={this.props.users}/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}


export default compose(
	withaAuthRedirect,
	connect (mapStateToProps, 
		{ getUsers })
)(FriendsOnlineContainer)