import { Typography } from '@mui/material';
import React from 'react';
import { HourForecast } from '@customTypes/api/sanitizedTypes';
import HourForecastDetailsCard from '@components/hourForecastDetailsCard';
import ScrollableList from '@components/scrollableList';

interface Props {
    forecasts: HourForecast[];
}

const HourlyForecast = ({ forecasts }: Props) => (
    <div className="flex flex-col w-full box-border overflow-auto h-full flex-[2]">
        <Typography ml={2} mb={2} fontWeight="bold" variant="h5" component="div">
            Hourly Forecast:
        </Typography>

        <ScrollableList
            items={Object.values(forecasts)}
            renderItem={(forecast) => <HourForecastDetailsCard forecast={forecast} />}
        />
    </div>
);

export default HourlyForecast;
