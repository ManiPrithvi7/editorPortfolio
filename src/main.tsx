import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/night-owl.css';

createRoot(document.getElementById("root")!).render(<App />);
