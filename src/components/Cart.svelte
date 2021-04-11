<script>
  export let products;
  export let summary = false;
  export let header = true;
  export let footer = true;
  export let caption = "";

  import { onMount } from 'svelte/';
  import { store } from './store.js';

  onMount(() => {
    // `persist` returns an unsubscribe callback
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
  {#each product.variations as variation}
    {#if !summary || $store[`${variation.slug}/${product.slug}`]}
    <tr>
      <th scope="row">{variation.description} {product.name}</th>
      <td></td>
      <td>
        <button on:click={store.decrement(`${variation.slug}/${product.slug}`)}>-</button>
        {$store[`${variation.slug}/${product.slug}`]}
        <button on:click={store.increment(`${variation.slug}/${product.slug}`)}>+</button>
      </td>
      <td></td>
    </tr>
    {/if}
  {/each}
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
