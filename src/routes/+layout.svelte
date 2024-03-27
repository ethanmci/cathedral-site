<script>
	import '../app.css';
	import '../fonts.css';
	import Link from '$lib/components/Link.svelte'
</script>

<nav class="text-gray-50 underline-offset-4 w-full lowercase bold p-5 absolute z-10">
	<!-- TODO: fix tabindex for nav -->
	<span class="mx-5"><Link text={"home"} url={'/'}/></span>
	<span class="mx-5"><Link text={"contact"} url={'/contact'}/></span>
</nav>
<slot />

<style lang="postcss">
	html,
	body {
		margin: 0;
		padding: 0;
		height: 100%; /* needed for container min-height */
	}
    :global(html) {
		background-color: theme(colors.stone.900);
	}
</style>
