<script>
  export let templateHtml, settings;
</script>

<style>
:global(html) {
  scroll-behavior: smooth;
}
:global(body) {
  background: repeat url("/img/swirl.png");
  background-color: #F9A8D4;
  color: #FFF;
  margin-left: 0;
  margin-right: 0;
}
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="/framework.css" />
  <title>J Flower Cake — Buttercream and Korean Bean Paste Flowers</title>
  <meta name="description" content="J Flower Cake — Buttercream and Korean Bean Paste Flowers">
</svelte:head>

<header class="text-center mt-4">
  <h1 class="font-cursive text-4xl sm:text-6xl">J Flower Cake</h1>
</header>

<main>
  {@html templateHtml}
</main>

<footer class="text-center mt-4">
  <address class="text-sm">
    <span class="font-cursive text-3xl">J Flower Cake</span><br />
    Middenmolenlaan 9<br />
    2807 DL Gouda
  </address>
  <small>&copy; J Flower cake, 2021</small>
  <dl class="text-xs">
    <dt class="inline px-2">KVK reg.</dt>
    <dd class="inline">80458998</dd>
    <dt class="inline px-2">VAT no.</dt>
    <dd class="inline">NL003445086B58</dd>
  </dl>
</footer>
