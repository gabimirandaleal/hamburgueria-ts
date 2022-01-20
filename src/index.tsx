import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Styles/globalStyles';
import {BrowserRouter} from "react-router-dom"
import { AppProvider } from './Contexts';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Toaster/>
        <GlobalStyle/>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
