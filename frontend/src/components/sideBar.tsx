import { Alert, Typography } from '@mui/material';

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
        <div className="w-full h-full flex flex-col p-10 gap-4 box-border">
            <div className="flex items-center justify-between mb-6 ">
                <Typography ml={2} variant="h5" fontWeight="bold">
                    Search for a location:
                </Typography>
                <ThemeSwitcherButton />
            </div>

            <div className="px-4">
                <LocationAutocomplete
                    currentLocation={currentLocation}
                    setCurrentLocation={setCurrentLocation}
                />
            </div>

            <Typography mt={2} ml={2} variant="h5" fontWeight="bold">
                Your Current Location:
            </Typography>

            <div className="p-4">
                <CurrentLocationCard />
            </div>

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
        </div>
    );
};

export default SideBar;
