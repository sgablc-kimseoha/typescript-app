import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
    reducer: {},
});

const StoreProvider = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
