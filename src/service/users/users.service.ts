import http from '../http';

export const getAllUsers = async () => {
	const { data } = await http.get('/users');
	return data;
};

export const createUsers = async (body: UserFormType) => {
	const { data } = await http.post('/users', body);
	return data;
};
