<script>
	import Card from 'src/components/screen/comments/Card.svelte';
	import LoadingPage from 'src/components/ui/LoadingPage.svelte';
	let { data } = $props();
	$inspect(data);
</script>

<svelte:head>
	<title>Comment page</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if !data?.props}
	<LoadingPage />
{:else}
	<div class="text-column">
		<ul class=" mx-auto grid max-w-6xl grid-cols-5 gap-4 space-y-2">
			{#each data?.props as item, index}
				<Card {...item} />
			{/each}
		</ul>
	</div>
{/if}
