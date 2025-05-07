import '../css/main.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';


// Clear the existing HTML content
const root = createRoot(document.getElementById('app')!);
root.render(<App />);