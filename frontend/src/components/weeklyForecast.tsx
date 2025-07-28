import { Typography } from '@mui/material';
import React from 'react';
import { DayForecast } from '@customTypes/api/sanitizedTypes';
import DayForecastDetailsCard from '@components/dayForecastDetailsCard';
import ScrollableList from '@components/scrollableList';

interface Props {
    forecasts: DayForecast[];
}

const WeeklyForecast = ({ forecasts }: Props) => {
    return (
        <div className="flex flex-col w-full box-border overflow-auto h-full flex-[3]">
            <Typography ml={2} mb={2} fontWeight="bold" variant="h5" component="div">
                Daily Forecast:
            </Typography>

            <ScrollableList
                items={Object.values(forecasts)}
                renderItem={(forecast) => <DayForecastDetailsCard forecast={forecast} />}
            />
        </div>
    );
};

export default WeeklyForecast;
