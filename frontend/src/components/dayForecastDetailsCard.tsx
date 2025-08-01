import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { DayForecast } from '@customTypes/api/sanitizedTypes';
import { weatherIconSource } from '@utils/weatherIcon';

const DayForecastDetailsCard = ({ forecast }: { forecast: DayForecast }) => (
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
                    {forecast.date}
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

                <Typography width="3rem" variant="h6">
                    L:{forecast.minTemperature}°
                </Typography>
                <Typography width="3rem" variant="h6">
                    H:{forecast.maxTemperature}°
                </Typography>
                <div className="flex items-center justify-center w-16">
                    <WaterDropIcon fontSize="medium" />
                    <Typography variant="h6">{forecast.chanceOfRain}%</Typography>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default DayForecastDetailsCard;
