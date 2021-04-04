<script>
  export let slug;

  import { onMount } from 'svelte/';
  import { getCart } from './cart.js';

  var cart;

  onMount(() => {
    cart = getCart( slug );
  });

</script>

<button on:click={cart.remove(1)}>-</button>
{$cart}
<button on:click={cart.add(1)}>+</button>

