<script>
  import Tile from '../../components/Tile.svelte';

  export let data;

  const products = data.markdown.products;
  products.sort( (a, b) => {
    if (a.frontmatter.order > b.frontmatter.order ) { return 1; }
    else if (a.frontmatter.order < b.frontmatter.order ) { return -1; }
    else { return 0; }
  } );
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
{#each products as product, i}
{#if product.frontmatter.promoted}
  <Tile id={i} {...product.frontmatter} />
{/if}
{/each}
</section>
