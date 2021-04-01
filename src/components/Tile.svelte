<script>
  export let id;
  export let name = 'J Flower Cake';
  export let description = 'A delicious J Flower Cake made from fresh ingredients and original Asian flower cake recipes and designs.';
  export let image;

  if (image) {
    image = image.match(/\/([^/]*)(?:\.\w+)$/)[1];
  }
  if (!image) {
    image = 'fallback';
  }

  let wamsg = encodeURIComponent(`I would like to order a ${name}. (from website)`);
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
      <source media="(min-width: 320px)" type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_tile-320/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_tile-640/{image}.webp 2x">
      <source type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_tile-160/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_tile-320/{image}.webp 2x">
      <img src="//res.cloudinary.com/jflower/image/upload/t_tile-320/{image}.jpg" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" alt="{name}">
    </picture>
    <figcaption class="hidden">{name}</figcaption>
  </figure>
</a>
<aside id="tile-{id}" class="fixed inset-0 top-1/4 sm:top-0 sm:left-1/2 z-10 flex-col justify-end p-3 bg-black bg-opacity-90 text-center">
  <a href="#/" class="absolute block top-0 right-0 p-3 text-xl">&#x2715;</a>
  <h2 class="font-display text-2xl">{name}</h2>
  <div class="overflow-hidden">
    <figure class="h-full">
      <picture>
        <source media="(min-width: 320px)" type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_landscape-640/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_landscape-1280/{image}.webp 2x">
        <source type="image/webp" srcset="//res.cloudinary.com/jflower/image/upload/t_landscape-320/{image}.webp, //res.cloudinary.com/jflower/image/upload/t_landscape-640/{image}.webp 2x">
        <img class="object-contain w-full h-full" src="//res.cloudinary.com/jflower/image/upload/t_landscape-640/{image}.jpg" sizes="(min-width: 640px) 50vw, 100vw" alt="{name}">
      </picture>
    </figure>
  </div>
  <p>{description}</p>
  <a href="https://wa.me/31611134040?text={wamsg}" target="_blank" class="w-1/2 max-w-xs self-center mt-2" rel="external nofollow noopener noreferrer">
    <button class="w-full border-2 border-white font-display text-white focus:bg-white active:bg-white hover:bg-white focus:border-yellow-600 active:border-yellow-600 hover:border-yellow-600 focus:text-yellow-600 active:text-yellow-600 hover:text-yellow-600 py-2 px-3 rounded-md">Order now</button>
  </a>
</aside>
</article>
