<script lang="ts">
  import albumTitle from '$lib/assets/title-text.png'  

  function imageSelector(e: MouseEvent): void {
    
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousemove={imageSelector} class="h-screen flex flex-col justify-center items-center relative">
  <img alt="A Cathedral, If You Can See It" src={albumTitle} style="width: 40em;">
  <p class="text-gray-50">An album by Sandour.</p>
</div>
