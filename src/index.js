import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { theme } from 'theme';
import { ProviderStore } from 'redux/store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProviderStore>
        <App />
      </ProviderStore>
    </ThemeProvider>
  </React.StrictMode>
);
