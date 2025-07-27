import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocationContextProvider } from '@state/locationContextProvider';
import { BookmarkedLocationsContextProvider } from '@state/bookmarkedLocationsContextProvider';
import Content from '@components/content';
import { ThemeContextProvider } from '@state/themeContextProvider';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <BookmarkedLocationsContextProvider>
            <LocationContextProvider>
                <ThemeContextProvider>
                    <CssBaseline />
                    <Content />
                </ThemeContextProvider>
            </LocationContextProvider>
        </BookmarkedLocationsContextProvider>
    </QueryClientProvider>
);

export default App;
