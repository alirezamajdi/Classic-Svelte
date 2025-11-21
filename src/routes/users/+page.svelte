<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import Card from 'src/components/screen/users/Card.svelte';
	import LoadingPage from 'src/components/ui/LoadingPage.svelte';
	import { getAllUsers } from 'src/service/users/users.service';

	const queryResult = useQuery('users', getAllUsers);
</script>

<main>
	{#if $queryResult.isLoading}
		<LoadingPage />
	{:else}
		<div class="flex w-full justify-center">
			<div class="grid grid-cols-4 justify-between gap-6">
				{#each $queryResult?.data as user, index}
					<Card {...user} />
				{/each}
			</div>
		</div>
	{/if}
</main>
