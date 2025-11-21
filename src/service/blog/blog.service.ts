import http from '../http';

export const getAllBlog = async () => {
	const { data } = await http.get('/users/1');
	return data;
};
