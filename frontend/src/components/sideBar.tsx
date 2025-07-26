import { Alert, Box, List, ListItem, Typography } from '@mui/material';

import useLocationContext from '@hooks/useLocationContext';
import BookmarkedLocationCard from '@components/bookmarkedLocationCard';
import useBookmarkedLocationsContext from '@hooks/useBookmarkedLocationsContext';
import LocationAutocomplete from '@components/locationAutocomplete';
import ScrollableList from '@components/scrollableList';

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
                p: 6,
                gap: 2,
                boxSizing: 'border-box',
            }}
        >
            <Typography ml={1} variant="h5" fontWeight="bold">
                Search for a location:
            </Typography>
            <LocationAutocomplete
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
            />

            <Typography mt={2} ml={1} variant="h5" fontWeight="bold">
                Your Bookmarked Location:
            </Typography>

            {!Object.values(bookmarkedLocations ?? {}).length && (
                <Alert severity="info">You haven't bookmarked any locations yet.</Alert>
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
