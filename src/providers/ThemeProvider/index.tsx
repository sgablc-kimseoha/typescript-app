import { createContext, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { defaultTheme } from 'constants/theme/defaultTheme';
import { Theme } from 'constants/theme/theme.types';

const ThemeContext = createContext({
  changeTheme: (theme: Theme) => {
    console.log('theme changed....');
  },
});

const ThemeProvider = ({ children }: any) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <StyledComponentsThemeProvider theme={currentTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
