import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LoadingScreen from './components/LoadingScreen';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingScreen />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
