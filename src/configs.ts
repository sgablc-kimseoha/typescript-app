export const setEnvironment = () => {
    document.title = process.env.REACT_APP_NAME || 'APP';
};
