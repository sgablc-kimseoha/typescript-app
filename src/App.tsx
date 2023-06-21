import IntlProvider from 'providers/IntlProvider';
import ErrorBoundary from 'providers/ErrorBoundary';
import StoreProvider from 'providers/StoreProvider';
import ThemeProvider from 'providers/ThemeProvider';
import AppRoutes from 'AppRoutes';

const App = () => {
  return (
    <IntlProvider>
      <ErrorBoundary>
        {/* <StoreProvider> */}
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
        {/* </StoreProvider> */}
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;
