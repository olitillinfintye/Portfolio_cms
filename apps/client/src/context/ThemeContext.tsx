'use client';

import { getCookie, setCookie } from 'cookies-next';
import { createContext, useEffect, useLayoutEffect, useState } from 'react';
enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}
export const ThemeContext = createContext({
  theme: Theme.SYSTEM,
  setDark: () => {},
  setLight: () => {},
  toggleLightDark: () => {},
  setSystemPreference: () => {},
});

export default function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState<Theme>(
    (getCookie('theme') as Theme) ?? Theme.SYSTEM,
  );

  useEffect(() => {
    let currentTheme = theme;
    if (theme === Theme.DARK) {
      document.documentElement.classList.remove(Theme.LIGHT);
      document.documentElement.classList.add(Theme.DARK);
    } else if (theme === Theme.LIGHT) {
      document.documentElement.classList.remove(Theme.DARK);
      document.documentElement.classList.add(Theme.LIGHT);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.remove(Theme.LIGHT);
        document.documentElement.classList.add(Theme.DARK);
        currentTheme = Theme.DARK;
      } else {
        document.documentElement.classList.remove(Theme.DARK);
        document.documentElement.classList.add(Theme.LIGHT);
        currentTheme = Theme.LIGHT;
      }
    }
    setCookie('theme', currentTheme);
  }, [theme]);

  const setDark = () => {
    setTheme(Theme.DARK);
  };
  const setLight = () => {
    setTheme(Theme.LIGHT);
  };
  const toggleLightDark = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  };
  const setSystemPreference = () => {
    setTheme(Theme.SYSTEM);
  };
  const values = {
    theme,
    setDark,
    setLight,
    toggleLightDark,
    setSystemPreference,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
