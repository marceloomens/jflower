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

<h2 class="font-display text-center text-xl">Cake Menu</h2>
<section class="grid">
{#if data.cakes}
  {#each data.cakes as cake, i}
  <Tile id={i} {...cake} />
  {/each}
{/if}
</section>
