import './styles/reset.css'
import './styles/common.css'


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Импорт здесь
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* Оберните весь App здесь */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
