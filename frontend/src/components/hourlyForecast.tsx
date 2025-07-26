import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { HourForecast } from '@customTypes/api/sanitizedTypes';
import HourForecastDetailsCard from '@components/hourForecastDetailsCard';
import ScrollableList from '@components/scrollableList';
import BookmarkedLocationCard from '@components/bookmarkedLocationCard';

interface Props {
    forecasts: HourForecast[];
}

const HourlyForecast = ({ forecasts }: Props) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            boxSizing: 'border-box',
            overflow: 'auto',
            height: '100%',
            flex: 2,
        }}
    >
        <Typography ml={2} mb={2} fontWeight="bold" variant="h5" component="div">
            Hourly Forecast:
        </Typography>

        <ScrollableList
            items={Object.values(forecasts)}
            renderItem={(forecast) => <HourForecastDetailsCard forecast={forecast} />}
        />
    </Box>
);

export default HourlyForecast;
