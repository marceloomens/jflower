import { writable } from 'svelte/store';

// We're not currently honouring anything but "THEIRS"
const MERGE_STRATEGY = "THEIRS";
const STORE_IDENTIFIER = "jflower-shopping-cart";

export function getStore() {

  const { subscribe, set, update } = writable({});

  function add( n, product) {
    update((store) => {
      if (product in store) {
        store[product] += n;
      } else {
        store[product] = n;
      }
      return store;
    });
  }

  function remove( n, product ) {
    update((store) => {
      if (product in store && store[product] < n) {
        store[product] = 0;
      } else if (product in store) {
        store[product] -= n;
      } else {
        store[product] = 0;
      }
      return store;
    });
  }

  function increment( product ) { add( 1, product ); }
  function decrement( product ) { remove( 1, product ); }

  function trash( product ) {
    update((store) => {
      store[product] = 0;
      return store;
    });
  }

  function persist( identifier=STORE_IDENTIFIER, storage=localStorage, stategy=MERGE_STRATEGY ) {
    const store = storage.getItem(identifier);
    if (store) {
      update((_) => JSON.parse(store));
    }
    subscribe((store) => storage.setItem(identifier, JSON.stringify(store)));
  }

  return { subscribe, add, remove, increment, decrement, trash, persist };
}
