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
  <figure>
    <picture>
      <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1600&ar=1:1&fit=crop" type="image/webp" media="(min-width: 1281px)">
      <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1280&ar=1:1&fit=crop" type="image/webp" media="(max-width: 1280px)">
      <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1024&ar=1:1&fit=crop" type="image/webp" media="(max-width: 1024px)">
      <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=768&ar=1:1&fit=crop" type="image/webp" media="(max-width: 768px)">
      <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=640&ar=1:1&fit=crop" type="image/webp" media="(max-width: 640px)">
      <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=320&ar=1:1&fit=crop" type="image/webp" media="(max-width: 320px)">
      <img src="//j-flower-cake.imgix.net/{image}?auto=format&q=25&w=768&ar=1:1&fit=crop" sizes="(max-width: 640px) 50vw, 35vw" alt="{name}">
    </picture>
    <figcaption class="hidden">{name}</figcaption>
  </figure>
</a>
<aside id="tile-{id}" class="fixed inset-0 top-1/4 sm:top-0 sm:left-1/2 z-10 flex-col justify-end p-3 bg-black bg-opacity-90 text-center">
  <a href="#/" class="target-dismiss absolute block top-0 right-0 p-3 text-xl">&#x2715;</a>
  <h2 class="font-display text-2xl">{name}</h2>
  <div class="overflow-hidden w-full self-center m-4">
    <figure class="h-full">
      <picture>
        <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1600&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" type="image/webp" media="(min-width: 1281px)">
        <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1280&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" type="image/webp" media="(max-width: 1280px)">
        <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=1024&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" type="image/webp" media="(max-width: 1024px)">
        <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=768&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" type="image/webp" media="(max-width: 768px)">
        <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=640&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" type="image/webp" media="(max-width: 640px)">
        <source srcset="//j-flower-cake.imgix.net/{image}?fm=webp&q=25&w=320&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" type="image/webp" media="(max-width: 320px)">
        <img class="object-contain" src="//j-flower-cake.imgix.net/{image}?auto=format&q=25&w=768&ar=4:3&fit=crop&border=1,C0000000&border-radius=10,10,10,10" sizes="(max-width: 640px) 50vw, 17vw" alt="{name}">
      </picture>
    </figure>
  </div>
  <p>{description}</p>
  <a href="#/" class="w-1/2 max-w-xs self-end sm:self-center mt-2">
    <button class="w-full border-2 border-white font-display text-white hover:bg-white hover:border-pink-600 hover:text-pink-600 py-2 px-3 rounded-md">Order now</button>
  </a>
</aside>
</article>
