import { writable } from 'svelte/store'

const DEFAULT = 0;

const stores = new Map();

function createStore( identifier ) {

  const value = Number( localStorage.getItem( identifier ) );
  const { subscribe, set, update } = writable( value || DEFAULT );

  subscribe(v => {
    localStorage.setItem( identifier, v )
  });

  function add( n ) {
    update(v => v + n);
  }

  function remove( n ) {
    update(v => v < n ? 0 : v - n);
  }

  return {
    subscribe,
    add,
    remove
  };
}

export function getCart( a, b ) {

  if ( typeof a === "undefined" )
    throw new Error( "(cart.js) `getCart( a, b )` requires at least one parameter." );
  const product = b ?? a;
  const variant = b ? a : "default";

  const identifier = `cart/${product}/${variant}`;

  if ( stores.has(identifier) ) {
    return stores.get(identifier);
  }

  const store = createStore( identifier );
  stores.set( identifier, store )

  return store;
}
