import './App.css';

import IntlProvider from 'providers/IntlProvider';
import ErrorBoundary from 'providers/ErrorBoundary';
import StoreProvider from 'providers/StoreProvider';
import ThemeProvider from 'providers/ThemeProvider';

const App = () => {
  return (
    <IntlProvider>
      <ErrorBoundary>
        <StoreProvider>
          <ThemeProvider>
            <div className="App" />
          </ThemeProvider>
        </StoreProvider>
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;
