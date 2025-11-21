import { BASE_URL } from '$lib/constants';
import axios from 'axios';
import Cookies from 'js-cookie';

const app = axios.create({
	baseURL: BASE_URL
});

app.interceptors.request.use(
	async (res) => {
		const token = Cookies.get('access_token');

		if (token) {
			res.headers.Token = `${token}`;
		}
		return res;
	},
	(err) => Promise.reject(err)
);

app.interceptors.response.use(
	(res) => {
		// console.log('ccc', res);
		return res;
	},
	async (err) => {
		// console.log('ccc', err);
		return Promise.reject(err);
	}
);

const http = {
	get: app.get,
	post: app.post,
	put: app.put,
	delete: app.delete,
	patch: app.patch
};

export default http;
