<script>
  export let id;
  export let name = 'J Flower Cake';
  export let description = 'A delicious J Flower Cake made from fresh ingredients and original Asian flower cake recipes and designs.';
  export let image = 'fallback.png';
</script>

<style>
aside {
  display: none;
}
aside:target {
  display: flex;
}
</style>

<article class="relative">
<a href="#tile-{id}">
  <picture>
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25" type="image/webp" media="(min-width: 1600px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1280&fit=crop" type="image/webp" media="(min-width: 1280px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=768&fit=crop" type="image/webp" media="(min-width: 768px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=568&fit=crop" type="image/webp" media="(min-width: 568px)">
    <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=320&fit=crop" type="image/webp">
    <img src="//j-flower-cake.imgix.net/{image}?auto=format&q=25&w=1280&fit=crop" sizes="35vw" alt="{name}">
  </picture>
</a>
<aside id="tile-{id}" class="fixed inset-0 top-1/2 sm:absolute sm:top-0 z-10 p-3 flex-col justify-end bg-black bg-opacity-75">
  <a href="#/" class="target-dismiss absolute block top-0 right-0 p-3">Close</a>
  <h2 class="font-display">{name}</h2>
  <p>{description}</p>
</aside>
</article>
