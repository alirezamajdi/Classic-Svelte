<script>
	let { data } = $props();
	$inspect(data);
</script>

<svelte:head>
	<title>Detail comment page</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class=" text-2xl pb-4">{data?.props?.name}</h1>
	<p>{data?.props?.body}</p>
</div>
