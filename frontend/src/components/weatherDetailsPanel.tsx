import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { locationForecastOptions } from '@api/weather';
import useLocationContext from '@hooks/useLocationContext';
import WeatherHeaderCard from '@components/weatherHeaderCard';
import HourlyForecast from '@components/hourlyForecast';
import WeeklyForecast from '@components/weeklyForecast';

const WeatherDetailsPanel = () => {
    const { currentLocation } = useLocationContext();

    const { data, isLoading } = useQuery(locationForecastOptions(currentLocation));

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <CircularProgress />
            </div>
        );
    }

    if (!data) {
        return;
    }

    return (
        <div className="flex flex-col box-border w-full h-full p-12 gap-8 overflow-hidden">
            <WeatherHeaderCard location={data?.location} forecastToday={data?.forecastToday} />
            <div className="flex flex-row w-full gap-8 box-border overflow-auto h-[70%]">
                <HourlyForecast forecasts={data.hourlyForecast} />
                <WeeklyForecast forecasts={data.weeklyForecast} />
            </div>
        </div>
    );
};

export default WeatherDetailsPanel;
