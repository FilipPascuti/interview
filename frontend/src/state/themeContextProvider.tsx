import React, { useMemo, useState, useCallback } from 'react';
import { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@utils/themes';
import { ThemeContext } from './themeContext';
import { ThemeProvider } from '@mui/material';

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    const theme: Theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

    const toggleTheme = useCallback(
        () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        [setMode],
    );

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
