import '../css/main.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AuthProvider } from './contexts/AuthContext';


// Clear the existing HTML content
const root = createRoot(document.getElementById('app')!);
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);


// メモ
// <App />を、AuthProviderで囲うことで、Appの領域内でAuthContextが使えるようにする。