<script lang="ts">
  import { cart, addToCart, removeFromCart, total } from 'src/store/cart';
  import type { Product } from 'src/store/cart';

  let products: Product[] = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 35 },
    { id: 3, name: 'Product C', price: 15 }
  ];
</script>

<style>
  .products, .cart { padding: 1rem; border: 1px solid #ccc; margin: 1rem 0; border-radius: 8px; }
  button { padding: 0.4rem 0.7rem; margin-left: 0.5rem; }
</style>

<div class="products">
  <h2>Products</h2>
  {#each products as p}
    <div>
      {p.name} — ${p.price}
      <button on:click={() => addToCart(p)}>Add</button>
    </div>
  {/each}
</div>

<div class="cart">
  <h2>Cart</h2>
  {#if $cart.length === 0}
    <p>No items yet.</p>
  {:else}
    {#each $cart as item}
      <div>
        {item.name} — {item.qty} × ${item.price} = ${item.qty * item.price}
        <button on:click={() => removeFromCart(item.id)}>Remove</button>
      </div>
    {/each}
    <hr />
    <strong>Total: ${$total}</strong>
  {/if}
</div>
