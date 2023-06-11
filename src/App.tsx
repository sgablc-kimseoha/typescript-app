import React from 'react';
import './App.css';

import LocaleProvider from 'providers/LocaleProvider';
import ErrorBoundary from 'providers/ErrorBoundary';
import StoreProvider from 'providers/StoreProvider';

const App = () => {
    return (
        <LocaleProvider>
            <ErrorBoundary>
                <StoreProvider>
                    <div className="App" />
                </StoreProvider>
            </ErrorBoundary>
        </LocaleProvider>
    );
};

export default App;
