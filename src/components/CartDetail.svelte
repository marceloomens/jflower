<script>
  export let product;

  let { slug } = product;

  import { onMount } from 'svelte/';
  import { getCart } from './cart.js';

  let cart;

  onMount(() => {
    cart = getCart( slug );
  });

</script>

<style>

</style>

<button on:click={cart.add(1)} class="w-full border-2 border-white font-display text-white focus:bg-white active:bg-white hover:bg-white focus:border-yellow-600 active:border-yellow-600 hover:border-yellow-600 focus:text-yellow-600 active:text-yellow-600 hover:text-yellow-600 py-2 px-3 rounded-md">Add to cart ({$cart})</button>
