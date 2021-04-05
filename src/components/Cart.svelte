<script>
  export let products;
  // export let summary = false;
  export let header = true;
  export let footer = true;
  export let caption = "";

  import CartDetail from './CartDetail.svelte';
</script>

<style>

</style>

{#if products.length > 0}
<table>
  {#if caption}<caption>Shopping cart</caption>{/if}
  {#if header}
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Unit price</th>
      <th scope="col">Units</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  {/if}
  <tbody>
  {#each products as product}
    <tr>
      <th scope="row">{product.name}</th>
      <td></td>
      <td><CartDetail hydrate-client={{slug: product.slug}} /></td>
      <td></td>
    </tr>
  {/each}
  </tbody>
  {#if footer}
  <tfoot>
    <tr>
      <th scope="row">Grand total</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
  {/if}
</table>
{/if}
