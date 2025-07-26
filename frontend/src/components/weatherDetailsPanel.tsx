import { Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { locationForecastOptions } from '@api/weather';
import useLocationContext from '@hooks/useLocationContext';
import WeatherHeaderCard from '@components/weatherHeaderCard';

const WeatherDetailsPanel = () => {
    const { currentLocation } = useLocationContext();

    const { data, isLoading } = useQuery(locationForecastOptions(currentLocation));

    if (isLoading) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!data) {
        return;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                p: 6,
                gap: 4,
                overflow: 'hidden',
            }}
        >
            <WeatherHeaderCard location={data?.location} forecastToday={data?.forecastToday} />
        </Box>
    );
};

export default WeatherDetailsPanel;
