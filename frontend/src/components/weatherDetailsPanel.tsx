import { Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { locationForecastOptions } from '@api/weather';
import useLocationContext from '@hooks/useLocationContext';
import WeatherHeaderCard from '@components/weatherHeaderCard';
import HourlyForecast from '@components/hourlyForecast';

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: 4,
                    boxSizing: 'border-box',
                    overflow: 'auto',
                    height: '70%',
                }}
            >
                <HourlyForecast forecasts={data.hourlyForecast} />
            </Box>
        </Box>
    );
};

export default WeatherDetailsPanel;
