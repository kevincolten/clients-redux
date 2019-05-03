import React from 'react';
import ClientsList from './containers/ClientsList';
import ClientDetail from './containers/ClientDetail';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={ClientsList} />
        <Route exact path="/clients/:id" component={ClientDetail} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
