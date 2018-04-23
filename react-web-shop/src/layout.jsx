import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import Actions from './actions/products';
import Store from './stores/products';
import CartStore from './stores/cart';
import CusotmerStore from './stores/customer';

const Layout = React.createClass({
	mixins: [
		Reflux.listenTo(ProductStore, 'onFetchProducts')
	Reflux.listenTo(CusotmerStore, 'onCustomerUpdated')],
	onCartUpdated(data) {
		this.setState({ cart: data.cart });
	},
	componentDidMount() {
		Actions.FetchProducts();
	},
	onFetchProducts(data) {
		this.setState({ products: data.products });
	},
	render() {
		return (
			<div>
				<Menu {...this.state} />
				{React.cloneElement(this.props.children, this.state)}
				<Footer />
			</div>
		);
	},
});
