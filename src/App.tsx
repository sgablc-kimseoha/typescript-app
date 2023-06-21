import IntlProvider from 'providers/IntlProvider';
import ErrorBoundary from 'providers/ErrorBoundary';
import ThemeProvider from 'providers/ThemeProvider';

import { Provider as StoreProvider } from 'react-redux';
import store from 'common/store';

import { RouterProvider } from 'react-router-dom';
import router from 'common/router';

const App = () => {
  return (
    <IntlProvider>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </StoreProvider>
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;
