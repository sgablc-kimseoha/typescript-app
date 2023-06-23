import { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme/defaultTheme';
import { ThemeType } from 'theme/Theme.types';

interface IAside {
  show: boolean;
  open: boolean;
}

const ThemeContext = createContext<{
  theme: any;
  themeType: string;
  aside: any;
  updateThemeType: any;
  updateAside: any;
}>({
  theme: {},
  themeType: '',
  aside: {},
  updateThemeType: () => null,
  updateAside: () => null,
});

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [themeType, setThemeType] = useState('light');
  const [aside, setAside] = useState();

  const updateThemeType = (type: ThemeType) => {
    setThemeType(type);
    // setTheme(theme);
  };

  const updateAside = ({ open, show }: IAside) => {
    // setAside();
  };

  return (
    <ThemeContext.Provider
      value={{ theme, themeType, aside, updateThemeType, updateAside }}
    >
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
