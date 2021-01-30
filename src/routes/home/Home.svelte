<script>
  import Tile from '../../components/Tile.svelte';
</script>

<style>
section {
  --tile-count: 2;
  --tile-dimension: calc((100vw - 6px) / 2);
  box-sizing: border-box;
  display: grid;
  gap: 2px;
  grid-auto-rows: var(--tile-dimension);
  grid-template-columns: repeat(var(--tile-count), var(--tile-dimension));
  max-width: 100vw;
  padding: 2px;
  width: 100vw;
}
@media (min-width: 720px) {
  section {
    --tile-count: 3;
    --tile-dimension: calc((100vw - 8px) / 3);
  }
}
</style>

<section>
  <Tile anchor={"pecan"} image={"mosaic-1.JPG"} alt={"Pecan cake"} />
  <Tile anchor={"passion"} image={"mosaic-1.JPG"} alt={"Passion cake"} />
  <Tile anchor={"new-year"} image={"mosaic-1.JPG"} alt={"New Year's cake"}/ />
</section>
