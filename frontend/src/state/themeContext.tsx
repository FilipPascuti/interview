import { createContext } from 'react';

type ThemeContextType = {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
