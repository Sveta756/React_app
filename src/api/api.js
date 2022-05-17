import * as axios from 'axios';

const instanse = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "43821c63-cc65-4fc4-980c-af51e36abf55"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
	return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},
	follow(userId) {
		return instanse.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instanse.delete(`follow/${userId}`)
	},
	auth() {
		return instanse.get(`auth/me`)
	},
	getProfile(userId) {
		return instanse.get(`profile/${userId}`)
	}
}


