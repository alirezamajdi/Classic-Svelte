<script lang="ts">
	let { value = $bindable(), ...props } = $props();
</script>

<input
	class="hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 block h-[50px] w-full appearance-none overflow-hidden rounded-[8px] border border-violet-200 bg-white px-4 pr-[48px] text-sm text-nowrap overflow-ellipsis text-slate-900 focus:border-transparent focus:ring-0 focus:outline focus:outline-2 focus:outline-primary"
	bind:value
	{...props}
/>


