import { Box, Card, CardContent, Typography } from '@mui/material';
import { weatherIconSource } from '@utils/weatherIcon';
import React from 'react';
import { HourForecast } from '@customTypes/api/sanitizedTypes';

interface Props {
    forecast: HourForecast;
}

const HourForecastDetailsCard = ({ forecast }: Props) => (
    <Card
        sx={{
            height: 'fit-content',
            width: '100%',
            borderRadius: 4,
            boxShadow: 6,
            p: 2,
        }}
    >
        <CardContent
            sx={{
                '&:last-child': { p: 0 },
            }}
        >
            <div className="flex flex-row items-center justify-around">
                <Typography width="6rem" variant="h6">
                    {forecast.time}
                </Typography>

                <Box
                    component="img"
                    src={weatherIconSource(forecast.condition)}
                    alt="Light Rain"
                    sx={{
                        width: 50,
                        height: 50,
                        p: 0,
                    }}
                />
                <Typography variant="h6">{forecast.temperature}°</Typography>
            </div>
        </CardContent>
    </Card>
);

export default HourForecastDetailsCard;
