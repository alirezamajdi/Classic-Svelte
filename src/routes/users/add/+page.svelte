<!-- From Uiverse.io by antonypjohnson -->

<script lang="ts">
	import { useMutation } from '@sveltestack/svelte-query';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	import Input from 'src/components/ui/Input.svelte';
	import { createUsers } from 'src/service/users/users.service';

	const mutation = useMutation((data: UserFormType) => createUsers(data));

	let initForm = { name: '', username: '', email: '' };
	let formInput = $state(initForm);

	const handleSave = () => {
		$mutation.mutate(formInput, {
			onSuccess: (res) => {
				toast.success('User added successfully');
				goto('/users');
			}
		});
	};

	const handleBack = () => {
		goto('/users');
	};
</script>

<div class="flex w-full items-center justify-center">
	<div class="w-[500px] rounded-lg bg-white p-10 shadow-lg">
		<div class="mb-10 grid grid-cols-1 gap-6">
			<div id="input" class="relative">
				<Input placeholder="Name" type="text" id="Name" bind:value={formInput.name} />

				<label
					for="floating_outlined"
					class="peer-invalid:text-error-500 focus:invalid:text-error-500 disabled:bg-gray-50-background- absolute start-1 top-2 z-10 origin-[0] -translate-y-[1.2rem] scale-75 transform bg-white px-2 text-[14px] leading-[150%] text-primary duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-z-10 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:z-10 peer-focus:-translate-y-[1.2rem] peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
				>
					Name
				</label>
			</div>
			<div id="input" class="relative">
				<Input placeholder="UserName" type="text" id="UserName" bind:value={formInput.username} />

				<label
					for="floating_outlined"
					class="peer-invalid:text-error-500 focus:invalid:text-error-500 disabled:bg-gray-50-background- absolute start-1 top-2 z-10 origin-[0] -translate-y-[1.2rem] scale-75 transform bg-white px-2 text-[14px] leading-[150%] text-primary duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-z-10 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:z-10 peer-focus:-translate-y-[1.2rem] peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
				>
					UserName
				</label>
			</div>
			<div id="input" class="relative">
				<Input placeholder="Email" type="text" id="Email" bind:value={formInput.email} />

				<label
					for="floating_outlined"
					class="peer-invalid:text-error-500 focus:invalid:text-error-500 disabled:bg-gray-50-background- absolute start-1 top-2 z-10 origin-[0] -translate-y-[1.2rem] scale-75 transform bg-white px-2 text-[14px] leading-[150%] text-primary duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-z-10 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:z-10 peer-focus:-translate-y-[1.2rem] peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
				>
					Email
				</label>
			</div>
		</div>

		<div class="flex gap-4 sm:flex sm:flex-row-reverse">
			<button
				class="border-violet-500-violet- h-[50px] w-fit rounded-lg border bg-violet-500 px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-violet-600 hover:ring-4 hover:ring-violet-100 focus:bg-violet-700 focus:ring-4 focus:ring-violet-200 focus:outline-none"
				type="button"
				on:click={handleSave}
			>
				<div class="flex items-center gap-2">
					{$mutation.isLoading ? 'Saving...' : 'Save changes'}
				</div>
			</button>
			<button
				class="h-[50px] w-fit rounded-lg border border-primary bg-transparent px-5 py-2 text-sm text-primary focus:ring-4 focus:ring-gray-100 focus:outline-none"
				type="button"
				on:click={handleBack}
			>
				Cancel
			</button>
		</div>
	</div>
</div>
