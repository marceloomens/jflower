<script>
  import Tile from '../../components/Tile.svelte';

  export let data;
</script>

<style>
section {
  --tile-gap: 2px;
  --tile-dimension: calc((100vw - 6px) / 2);
  gap: var(--tile-gap);
  grid-auto-rows: var(--tile-dimension);
  grid-template-columns: repeat(2, var(--tile-dimension));
  padding: var(--tile-gap);
}
@media (min-width: 768px) {
  section {
    --tile-dimension: calc((100vw - 8px) / 3);
    grid-template-columns: repeat(3, var(--tile-dimension));
  }
}
</style>

<section class="grid">
{#if data.cakes}
  {#each data.cakes as cake, i}
  <Tile id={i} {...cake} />
  {/each}
{/if}
</section>
