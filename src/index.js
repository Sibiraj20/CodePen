import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <React.StructMode>
        <App />
    </React.StructMode>,
    document.getElementById('root')
);