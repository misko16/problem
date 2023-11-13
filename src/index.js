import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import {persistor, store} from "./redux/store"
import './Css/index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
      </BrowserRouter>
);