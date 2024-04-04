<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	let name: string = '';
	let email: string = '';
	let title: string = '';
	let message: string = '';
</script>

<svelte:head>
	<title>Sandour - Contact</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center items-center relative text-gray-50">
	<h1 class="text-3xl font-bold underline underline-offset-4 mb-8">Contact</h1>
	{#if !form?.success}
		{#if form?.errors}
		<div class="md:w-1/3 w-11/12 mb-4 bg-red-900 p-4 text-white font-bold">
			<p>Empty or invalid fields: {[...Object.keys(form?.errors)].join(', ')}</p>
		</div>
		{/if}
	<form method="POST" class="flex flex-col items-center md:w-1/3 w-11/12" action="?/submit" use:enhance>
		<div class="grid grid-cols-2 w-full gap-4 mb-8">
			<div class="flex flex-col md:col-span-1 col-span-2">
				<label for="name" placeholder="Your Name" class="font-bold">Name:</label>
				<input
					name="name"
					id="name"
					type="text"
					class={`${form?.errors?.name ? 'border-red-600' : ''} border-0 border-b-2 hover:border-yellow-600 focus:border-yellow-600 bg-transparent transition-all`}
					bind:value={name}
				/>
			</div>
			<div class="flex flex-col md:col-span-1 col-span-2">
				<label for="email" placeholder="your.email@here.com" class="font-bold">Email:</label>
				<input
					name="email"
					id="email"
					type="email"
					class={`${form?.errors?.email ? 'border-red-600' : ''} border-0 border-b-2 hover:border-yellow-600 focus:border-yellow-600 bg-transparent transition-all`}
					bind:value={email}
				/>
			</div>
		</div>
		<div class="flex flex-col w-full mb-8">
			<label for="title" placeholder="Your Name" class="font-bold"
				>Title: <span class="text-xs font-normal text-gray-400">(optional)</span></label
			>
			<input
				name="title"
				id="title"
				type="text"
				class="border-0 border-b-2 hover:border-yellow-600 focus:border-yellow-600 bg-transparent transition-all"
				bind:value={title}
			/>
		</div>
		<div class="flex flex-col w-full mb-8">
			<label for="message" placeholder="Your Name" class="font-bold">Message:</label>
			<textarea
				name="message"
				id="message"
				rows="6"
				class={`${form?.errors?.message ? 'border-red-600' : ''} h-fit border-0 border-b-2 hover:border-yellow-600 focus:border-yellow-600 bg-transparent transition-all`}
				bind:value={message}
			/>
		</div>
		<input
			type="submit"
			value="Send"
			class=" w-1/3 bg-gray-50 hover:bg-gray-400 active:bg-yellow-600 text-slate-900 p-3 transition-all"
		/>
	</form>
	{:else} 
		<p>Message sent!</p>
	{/if}

</div>
