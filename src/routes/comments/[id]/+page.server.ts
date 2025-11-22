import { BASE_URL } from 'src/lib/constants';

export async function load(event: any) {
	const { id } = event.params;
	const res = await fetch(BASE_URL + '/comments/' + id);
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
