import Reflux from 'reflux';
import CartActions from '../actions/cart';
let _cart = { cart: [] };
const CartStore = Reflux.createStore({
	init() {
		this.listenTo(CartActions.AddToCart, this.onAddToCart);
		this.listenTo(CartActions.RemoveFromCart, this.onRemoveFromCart);
		this.listenTo(CartActions.ClearCart, this.onClearCart);
	},
	onAddToCart(item) {
		_cart.cart.push(item);
		this.emit();
	},
	onRemoveFromCart(item) {
		_cart.cart = _cart.cart.filter(cartItem => {
			return item !== cartItem;
		});
		this.emit();
	},
	onClearCart() {
		_cart.cart = [];
		this.emit();
	},
	emit() {
		this.trigger(_cart);
	},
});

module.exports = CartStore;
