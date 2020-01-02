import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import App from './components/App';
import products from './models/products';
import cart from './models/cart';
import select from './models/select';

const app = dva();
app.model(products);
app.model(cart);
app.model(select);
app.use(createLoading());
app.router(() => <App />);
app.start('#root');
