import { ReactElement, Component, ErrorInfo } from 'react';
import PageError from 'components/PageError';

type ErrorBoundaryProviderProps = {
  children: ReactElement;
};

type ErrorBoundaryProviderState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<
  ErrorBoundaryProviderProps,
  ErrorBoundaryProviderState
> {
  public state: ErrorBoundaryProviderState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryProviderState {
    // Update state so the next render will show the fallback UI.

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);

    console.log('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // return this.props.fallback;

      return <PageError />;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
