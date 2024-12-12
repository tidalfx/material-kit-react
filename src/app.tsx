import './global.css';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from './routes/sections';
import { ThemeProvider } from './theme/theme-provider';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
