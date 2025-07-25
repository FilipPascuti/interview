import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Content from '@components/content';

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
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Content />
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
