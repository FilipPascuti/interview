import { useContext } from 'react';
import { ThemeContext } from '@state/themeContext';

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("The theme context isn't configured correctly");
    return context;
};

export default useThemeContext;
