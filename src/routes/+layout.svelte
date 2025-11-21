<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from 'svelte-sonner';
	import Header from 'src/components/kit/Header.svelte';

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import './layout.css';

	const queryClient = new QueryClient();
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Toaster position="bottom-left" />
	<div
		class="relative container mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base"
	>
		<Header />
		{@render children()}
	</div>
</QueryClientProvider>
