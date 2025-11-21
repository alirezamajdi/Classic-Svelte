<script>
	let props = $props();
</script>

<button
	class="border-violet-500-violet- h-[50px] w-fit rounded-lg border bg-violet-500 px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-violet-600 hover:ring-4 hover:ring-violet-100 focus:bg-violet-700 focus:ring-4 focus:ring-violet-200 focus:outline-none"
	{...props}
>
	<div class="flex items-center gap-2">
		<slot />
	</div>
</button>
