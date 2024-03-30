<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	async function Submit(e: Event) {}
</script>

<svelte:head>
    <title>Sandour - Contact</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center items-center relative">
	<form method="POST">
		<label>
			Email
			<input name="email" type="email" />
		</label>
		<label>
			Password
			<input name="password" type="password" />
		</label>
		<button>Log in</button>
	</form>
	<p><Link url="mailto:contact@sandour.xyz" text={'contact@sandour.xyz'} /></p>
</div>
