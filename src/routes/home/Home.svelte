<script>
  import Tile from '../../components/Tile.svelte';
  import Cart from '../../components/Cart.svelte';

  export let data;
</script>

<style>
section {
  --tile-gap: 0.7rem;
  gap: var(--tile-gap);
  grid-template-columns: repeat(2, auto);
  padding: var(--tile-gap);
}
@media (min-width: 640px) {
  section {
    grid-template-columns: repeat(3, auto);
  }
}
@media (min-width: 1024px) {
  section {
    grid-template-columns: repeat(4, minmax(auto, 320px));
  }
}
</style>

<section class="grid justify-center">
{#each data.products as product, id}
  <Tile {id} {...product} />
{/each}
</section>

<Cart hydrate-client={{products: data.products}} />
