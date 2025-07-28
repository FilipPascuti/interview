import { Alert, CircularProgress } from '@mui/material';
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
            <div className="flex items-center justify-center w-full h-32">
                <CircularProgress />
            </div>
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
