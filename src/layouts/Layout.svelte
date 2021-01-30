<script>
  export let templateHtml, settings;
</script>

<style>
:global(html) {
  scroll-behavior: smooth;
}
:global(body) {
  background: repeat url("/img/swirl.png");
  background-color: rgb(241, 39, 124);
  color: #FFF;
  margin-left: 0;
  margin-right: 0;
}
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="/framework.css" />
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Carter+One&display=swap" rel="stylesheet">
  <title>J Flower Cake — Buttercream and Korean Bean Paste Flowers</title>
  <meta name="description" content="J Flower Cake — Buttercream and Korean Bean Paste Flowers">
</svelte:head>

<header class="text-center">
  <h1 class="display-font-primary">J Flower Cake</h1>
</header>

<main>
  {@html templateHtml}
</main>

<footer class="text-center">
  <address>
    <span class="display-font-primary">J Flower Cake</span><br />
    Middenmolenlaan 8<br />
    2807 DL Gouda
  </address>
  <dl>
    <dt>KVK reg.</dt>
    <dd>80458998</dd>
    <dt>VAT no.</dt>
    <dd>NL003445086B58</dd>
  </dl>
  <small>&copy; J Flower cake, 2021.</small>
</footer>
