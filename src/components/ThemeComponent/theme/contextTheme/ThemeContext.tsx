// src/context/ThemeContext.tsx
import { createContext, useState, ReactNode } from 'react';
import { Theme, lightTheme, darkTheme } from '../theme';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);
  
  const toggleTheme = () => {
    setCurrentTheme(prev => prev.name === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{
      theme: currentTheme,
      toggleTheme,
      isDarkMode: currentTheme.name === 'dark'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};