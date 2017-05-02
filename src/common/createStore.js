import { applyMiddleware, createStore as createReduxStore, compose, combineReducers } from 'redux';
import calculator from './api/calculator';
import { promiseMiddleware } from './midlewares/promiseMiddleware';
import injectDependencies from './midlewares/injectDependencies';

const createStore = ({ initialState }) => {
  const reducers = {
      calculator
  }

  const middlewares = [];

  const customMiddlewares = applyMiddleware(injectDependencies(), promiseMiddleware, ...middlewares);

   const allMiddlewares = process.env.IS_BROWSER && window.devToolsExtension
    ? compose(customMiddlewares, window.devToolsExtension())
    : customMiddlewares;


    return createReduxStore(
      combineReducers(reducers),
      initialState,
      allMiddlewares
    );
};

export default createStore;
