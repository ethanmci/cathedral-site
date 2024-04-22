<script lang="ts">
	import imageUrlBuilder from '@sanity/image-url';
	import { createClient } from '@sanity/client';

	export const client = createClient({
		projectId: '1chuxo97',
		dataset: 'production',
		apiVersion: '2021-10-21',
		useCdn: false
	});

	export let data;

	const builder = imageUrlBuilder(client);

	function urlFor(source: object) {
		return builder.image(source);
	}

	function orderReleases(a: any, b: any) {
		if (new Date(a.releaseDate) > new Date(b.releaseDate)) return -1;
		if (new Date(a.releaseDate) < new Date(b.releaseDate)) return 1;
		return 0;
	}
</script>

<svelte:head>
	<title>Sandour - Discography</title>
</svelte:head>

<div class="h-screen flex flex-col relative pt-24 p-10 text-gray-50">
	<h1 class="mb-10 text-2xl">Discography</h1>
	<h2 class="mb-4 text-xl">Singles</h2>
	{#if data.song && data.song.length}
		<div class="grid md:grid-cols-5 gap-4">
			{#each data.song.sort(orderReleases) as single}
				<div class="min-w-28 mb-4">
					<img
						src={urlFor(single.cover).width(600).toString()}
						alt="Single Cover, temp description"
						class="mb-2"
						loading="lazy"
					/>
					<p>{single.title}</p>
					<p class="text-xs">{new Date(single.releaseDate).getFullYear()}</p>
				</div>
			{/each}
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
