import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Content from '@components/content';
import { LocationContextProvider } from '@state/locationContextProvider';

const queryClient = new QueryClient();

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6188BC',
        },
    },
});

const App = () => (
    <QueryClientProvider client={queryClient}>
        <LocationContextProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Content />
            </ThemeProvider>
        </LocationContextProvider>
    </QueryClientProvider>
);

export default App;
