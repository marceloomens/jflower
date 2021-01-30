<script>
  import Tile from '../../components/Tile.svelte';
</script>

<style>
section.mosaic {
  --element-count: 2;
  --element-dimension: calc((100vw - 6px) / 2);
  box-sizing: border-box;
  display: grid;
  gap: 2px;
  grid-auto-rows: var(--element-dimension);
  grid-template-columns: repeat(var(--element-count), var(--element-dimension));
  max-width: 100vw;
  padding: 2px;
  width: 100vw;
}
@media (min-width: 720px) {
  section.mosaic {
    --element-count: 3;
    --element-dimension: calc((100vw - 8px) / 3);
  }
}
</style>

<section class="mosaic">
  <Tile anchor={"pecan"} image={"mosaic-1.JPG"} alt={"Pecan cake"} />
  <Tile anchor={"passion"} image={"mosaic-1.JPG"} alt={"Passion cake"} />
  <Tile anchor={"new-year"} image={"mosaic-1.JPG"} alt={"New Year's cake"}/ />
</section>
