import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import React from 'react';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});

export const withaAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to={'/login'}/>
			return <Component {...this.props} />
		}
	}
	
	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectedAuthRedirectComponent;
}