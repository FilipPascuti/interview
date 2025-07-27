import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from '@mui/material';
import useThemeContext from '@hooks/useThemeContext';

const ThemeSwitcherButton = () => {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <Button onClick={toggleTheme}>
            {mode === 'dark' ? (
                <DarkModeIcon fontSize="large" />
            ) : (
                <LightModeIcon fontSize="large" />
            )}
        </Button>
    );
};
export default ThemeSwitcherButton;
