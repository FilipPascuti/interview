import { Alert, Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { sanitizeLocationForecastData } from '@utils/sanitizer';
import { locationForecast } from '@api/weather';
import useLocationContext from '@hooks/useLocationContext';
import SidebarLocationCard from '@components/sidebarLocationCard';
import getCurrentLocation from '@utils/geolocation';

const CurrentLocationCard = () => {
    const { setCurrentLocation } = useLocationContext();

    const {
        data: locationCoordinates,
        error,
        isLoading: locationCoordinatesLoading,
    } = useQuery({
        queryKey: ['locationCoordonates'],
        queryFn: getCurrentLocation,
    });

    const { data, isLoading } = useQuery({
        queryKey: ['forecast', locationCoordinates],
        queryFn: () => locationForecast(`${locationCoordinates?.lat},${locationCoordinates?.lng}`),
        enabled: !!locationCoordinates,
        select: sanitizeLocationForecastData,
    });

    if (error) {
        return (
            <Alert severity="error">
                There was an error loading your location. Please check permisions.
            </Alert>
        );
    }

    if (locationCoordinatesLoading || isLoading) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="8rem"
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!data) return null;

    return (
        <SidebarLocationCard
            location={data.location}
            forecastToday={data.forecastToday}
            onClick={() => setCurrentLocation(data.location)}
        />
    );
};
export default CurrentLocationCard;
