import { Alert, Box, Typography } from '@mui/material';

import useLocationContext from '@hooks/useLocationContext';
import BookmarkedLocationCard from '@components/bookmarkedLocationCard';
import useBookmarkedLocationsContext from '@hooks/useBookmarkedLocationsContext';
import LocationAutocomplete from '@components/locationAutocomplete';
import ScrollableList from '@components/scrollableList';
import ThemeSwitcherButton from '@components/themeSwitcherButton';
import CurrentLocationCard from '@components/currentLocationCard';

const SideBar = () => {
    const { currentLocation, setCurrentLocation } = useLocationContext();
    const { bookmarkedLocations } = useBookmarkedLocationsContext();

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 5,
                gap: 2,
                boxSizing: 'border-box',
            }}
        >
            <Box mb={3} display="flex" alignItems="center" justifyContent="space-between">
                <Typography ml={2} variant="h5" fontWeight="bold">
                    Search for a location:
                </Typography>
                <ThemeSwitcherButton />
            </Box>

            <Box pl={2} pr={2}>
                <LocationAutocomplete
                    currentLocation={currentLocation}
                    setCurrentLocation={setCurrentLocation}
                />
            </Box>

            <Typography mt={2} ml={2} variant="h5" fontWeight="bold">
                Your Current Location:
            </Typography>

            <Box p={2}>
                <CurrentLocationCard />
            </Box>

            <Typography mt={2} ml={2} variant="h5" fontWeight="bold">
                Your Bookmarked Location:
            </Typography>

            {!Object.values(bookmarkedLocations ?? {}).length && (
                <Alert sx={{ margin: 2 }} severity="info">
                    You haven't bookmarked any locations yet.
                </Alert>
            )}

            <ScrollableList
                items={Object.values(bookmarkedLocations)}
                renderItem={(location) => (
                    <BookmarkedLocationCard
                        location={location}
                        onClick={() => setCurrentLocation(location)}
                    />
                )}
            />
        </Box>
    );
};

export default SideBar;
