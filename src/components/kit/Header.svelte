<script>
	const items = [
		{ title: 'Home', href: '/' },
		{ title: 'Users', href: '/users' },
		{ title: 'Add user', href: '/users/add' },
		{ title: 'blog', href: '/blog' },
		{ title: 'Add post', href: '/blog/add' },
		{ title: 'Earth', href: '/earth' },
		{ title: 'Comments', href: '/comments' },
		{ title: 'Products', href: '/products' }
	];
</script>

<header class="mb-10">
	<div class="flex w-full gap-2 border-b border-primary py-3">
		{#each items as item, index}
			<a class=" rounded-md px-3 py-2 hover:bg-primary hover:text-white" href={item.href}
				>{item.title}</a
			>
		{/each}
	</div>
</header>
