<script lang="ts">
  import albumTitle from '$lib/assets/title-text.png'
  import stareImg from '$lib/assets/stare.jpg'  

  function imageSelector(e: MouseEvent): void {
    
  }
</script>

<svelte:head>
  <title>Sandour</title>
</svelte:head>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousemove={imageSelector} class="h-screen flex flex-col justify-center items-center relative overflow-hidden">
  <img src={stareImg} style="width: 45em;" class="absolute -z-10 left-36" alt="Sandour staring off to the left, wearing a chainmail hood">
  <img src={albumTitle} style="width: 40em;" alt="A Cathedral, If You Can See It" draggable="false">
  <p class="text-gray-50">An album by Sandour</p>
  <p class="text-gray-50">Out late 2024</p>
</div>