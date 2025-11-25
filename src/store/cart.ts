// store/cart.ts
import { writable, derived } from 'svelte/store';

export interface Product {
	id: number;
	name: string;
	price: number;
}

export interface CartItem extends Product {
	qty: number;
}

// items in cart
export const cart = writable<CartItem[]>([]);

export const addToCart = (product: Product) => {
	cart.update((items) => {
		const existing = items.find((i) => i.id === product.id);
		if (existing) {
			return items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
		}
		return [...items, { ...product, qty: 1 }];
	});
};

export const removeFromCart = (id: number) => {
	cart.update((items) => items.filter((i) => i.id !== id));
};

// derived total
export const total = derived(cart, ($c) => $c.reduce((t, i) => t + i.qty * i.price, 0));
