<script>
	import '../app.css';
	import '../fonts.css';
</script>

<nav class="text-gray-50 underline-offset-4 w-full lowercase bold p-5 absolute z-10">
    <a class="underline mx-4 hover:text-green-400" href="/">Home</a>
	<a class="underline mx-4 hover:text-" href="/contact">Contact</a>
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
