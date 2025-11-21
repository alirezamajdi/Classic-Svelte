<script lang="ts">
	import { onMount } from 'svelte';
	import Card from 'src/components/screen/blog/Card.svelte';
	import http from 'src/service/http';
	import LoadingPage from 'src/components/ui/LoadingPage.svelte';
	let posts: any = $state([]);
	let loading = $state(true);

	onMount(() => {
		http
			.get('/posts')
			.then((res) => {
				posts = res.data;
			})
			.finally(() => {
				loading = false;
			});
	});
</script>

<main>
	{#if loading}
		<LoadingPage />
	{:else}
		<div class="flex w-full justify-center">
			<div class="grid grid-cols-4 justify-between gap-6">
				{#each posts as post, index}
					<Card {...post} />
				{/each}
			</div>
		</div>
	{/if}
</main>
