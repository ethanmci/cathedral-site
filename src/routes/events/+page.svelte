<script lang="ts">
	import { createClient } from '@sanity/client';

	export const client = createClient({
		projectId: '1chuxo97',
		dataset: 'production',
		apiVersion: '2021-10-21',
		useCdn: false
	});

	export let data;
</script>

<svelte:head>
	<title>Sandour - Events</title>
</svelte:head>

<div class="h-screen flex flex-col relative pt-24 p-10 text-gray-50">
	<h1 class="mb-5 text-2xl">Upcoming Events / Performances</h1>
	{#if data.event && data.event.length}
		{#each data.event as event}
		<a href={event.url} class="mb-3 group transition-all">
			<div class="w-full py-7 px-4 bg-stone-800 hover:bg-opacity-75">
				<h3 class="text-xl">{event.title}</h3>
				<p class="mb-4">{!event.eventDate ? "TBD" : new Date(event.eventDate).toDateString()}</p>
				<p class="group-hover:text-yellow-600 hover:underline-offset-8 hover:opacity-75 underline underline-offset-4 transition-all">See details &#8627;</p>
			</div>
		</a>
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
