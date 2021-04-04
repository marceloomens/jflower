<script>
  import CartDetail from './CartDetail.svelte';

  export let products;
</script>

<style>

</style>

<table>
  <caption>Shopping cart</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Unit price</th>
      <th scope="col">Units</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
  {#each products as {name, slug}}
    <tr>
      <th scope="row">{name}</th>
      <td></td>
      <td><CartDetail hydrate-client={{slug}} /></td>
      <td></td>
    </tr>
  {/each}
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Grand total</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>
