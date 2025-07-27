import { Box, Typography } from '@mui/material';
import React from 'react';
import { DayForecast } from '@customTypes/api/sanitizedTypes';
import DayForecastDetailsCard from '@components/dayForecastDetailsCard';
import ScrollableList from '@components/scrollableList';

interface Props {
    forecasts: DayForecast[];
}

const WeeklyForecast = ({ forecasts }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                boxSizing: 'border-box',
                overflow: 'auto',
                height: '100%',
                flex: 3,
            }}
        >
            <Typography ml={2} mb={2} fontWeight="bold" variant="h5" component="div">
                Daily Forecast:
            </Typography>
            <ScrollableList
                items={Object.values(forecasts)}
                renderItem={(forecast) => <DayForecastDetailsCard forecast={forecast} />}
            />
        </Box>
    );
};

export default WeeklyForecast;
