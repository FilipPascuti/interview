import { Alert, Box, List, ListItem, Typography } from '@mui/material';

import useLocationContext from '@hooks/useLocationContext';
import LocationAutocomplete from '@components/locationAutocomplete';

const SideBar = () => {
    const { currentLocation, setCurrentLocation } = useLocationContext();

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
        </Box>
    );
};

export default SideBar;
