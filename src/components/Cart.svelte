<script>
  export let products;
  // export let summary = false;
  export let header = true;
  export let footer = true;
  export let caption = "";

  import { onMount } from 'svelte/';
  import { getStore } from './store.js';

  let store = getStore();

  onMount(() => {
    store.persist();
  });
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
    <!-- {#if $store[product.slug]} -->
    <tr>
      <th scope="row">{product.name}</th>
      <td></td>
      <td>
        <button on:click={store.decrement(product.slug)}>-</button>
        {$store[product.slug]}
        <button on:click={store.increment(product.slug)}>+</button>
      </td>
      <td></td>
    </tr>
    <!-- {/if} -->
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
