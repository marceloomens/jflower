import { writable } from 'svelte/store';

// I'm not currently honouring anything but "THEIRS"
const MERGE_STRATEGY = "THEIRS";
const STORE_IDENTIFIER = "jflower-shopping-cart";

const { subscribe, set, update } = writable({});

let unsubscribe, isPersistent = false;

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
  if (isPersistent) return console.warn("J Flower Cake: Store is already persistent");
  const store = storage.getItem(identifier);
  if (store) {
    update((_) => JSON.parse(store));
  }
  unsubscribe = subscribe((store) => storage.setItem(identifier, JSON.stringify(store)));
  return isPersistent = true && unsubscribe;
}

export const store = { subscribe, add, remove, increment, decrement, trash, persist };
