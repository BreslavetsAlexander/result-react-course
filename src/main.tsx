import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('add #root element');
}

createRoot(rootElement).render(<App />);