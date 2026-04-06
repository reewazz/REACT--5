import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import { CounterProvider } from './helpers/CounterContext.jsx';
import { AuthProvider } from './helpers/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <MantineProvider>
      <CounterProvider>
        <AuthProvider>
    <App />
    </AuthProvider>
    </CounterProvider>
    </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
