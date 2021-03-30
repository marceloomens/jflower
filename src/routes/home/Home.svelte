<script>
  import Tile from '../../components/Tile.svelte';

  export let data;
</script>

<style>
section {
  --tile-gap: 0.7rem;
  gap: var(--tile-gap);
  grid-template-columns: 1fr 1fr;
  padding: var(--tile-gap);
}
@media (min-width: 768px) {
  section {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

<section class="grid">
{#each data.markdown.products as product, i}
  <Tile id={i} {...product.frontmatter} />
{/each}
</section>
