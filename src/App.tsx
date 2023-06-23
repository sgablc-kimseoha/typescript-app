import ErrorBoundary from 'common/error-boundary/ErrorBoundary';

import I18nProvider from 'i18n/I18nProvider';
import AuthProvider from 'auth/AuthProvider';
import ThemeProvider from 'theme/ThemeProvider';

import { Provider as StoreProvider } from 'react-redux';
import store from 'services/store';

import { RouterProvider } from 'react-router-dom';
import router from 'routes/router';

const App = () => {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <StoreProvider store={store}>
          <AuthProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </AuthProvider>
        </StoreProvider>
      </I18nProvider>
    </ErrorBoundary>
  );
};

export default App;
