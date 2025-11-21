<script>
	// get data from server
	// let {data} = $props();
	// $inspect(data);

	//get data from client
	import http from 'src/service/http';
	import { onMount } from 'svelte';
	let data = $state({ title: '', body: '' });

	onMount(async () => {
		http.get(`/posts/1`).then((res) => {
			data = res.data;
		});
	});
</script>

<h1>Detail Article</h1>
<h3>{data.title}</h3>
<p>{data.body}</p>
