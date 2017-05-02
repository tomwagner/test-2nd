import React, { PropTypes as RPT } from 'react';
import { Provider } from 'react-redux';
import createStore from '../common/createStore';
import logger from 'redux-logger';

const store = createStore({}, {
    middlewares: [logger]
});

const BrowserProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

BrowserProvider.propTypes = {
  children: RPT.node.isRequired
};

export default BrowserProvider;
