import { BASE_URL } from 'src/lib/constants';

export async function load({ fetch }: any) {
	const res = await fetch(BASE_URL + '/comments');
	const data = await res.json();
	if (res.ok) {
		return {
			props: data
		};
	}
	return {
		status: res.status
	};
}
