import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, getUsers } from '../../redux/users-reducers';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsersSelector } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
		{this.props.isFetching ? <Preloader/> : null}
		<Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
		</>
	}
}

// let mapStateToProps = (state) => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching
// 	}
// }

let mapStateToProps = (state) => {
	return {
		users: getUsersSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state)
	}
}


export default compose(
	connect (mapStateToProps, 
		{follow, unfollow, setCurrentPage, getUsers })
)(UsersContainer)