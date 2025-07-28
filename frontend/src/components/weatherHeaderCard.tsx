import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import BookmarkLocationButton from '@components/bookmarkLocationButton';
import { Location } from '@customTypes/api/weather';
import { CurrentDayForecast } from '@customTypes/api/sanitizedTypes';
import { weatherIconSource } from '@utils/weatherIcon';

interface Props {
    location: Location;
    forecastToday: CurrentDayForecast;
}

const WeatherHeaderCard = ({ location, forecastToday }: Props) => (
    <Card
        sx={{
            borderRadius: 4,
            boxShadow: 6,
            p: 3,
            display: 'flex',
            height: 'fit-content',
        }}
    >
        <CardContent
            sx={{
                flexGrow: 1,
            }}
        >
            <div className="flex items-center justify-between h-full">
                <div className="flex flex-col justify-center">
                    <Box
                        component="img"
                        src={weatherIconSource(forecastToday.condition)}
                        alt="Light Rain"
                        sx={{
                            width: 200,
                        }}
                    />
                    <Typography variant="h6">{forecastToday.condition}</Typography>
                    <Typography variant="h6">
                        <ThermostatIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Min Temperature: {forecastToday.minTemperature}°
                    </Typography>
                    <Typography variant="h6">
                        <ThermostatIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Max Temperature: {forecastToday.maxTemperature}°
                    </Typography>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between">
                            <Typography fontWeight="bold" variant="h2">
                                {forecastToday.temperature}°
                            </Typography>
                            <BookmarkLocationButton location={location} />
                        </div>
                        <div className="flex justify-between mt-4">
                            <Typography variant="h6">
                                {location.name}, {location.country}
                            </Typography>
                        </div>
                        <Divider sx={{ my: 2, width: '100%' }} />
                    </div>

                    <div className="flex flex-row justify-around w-full gap-4">
                        <div className="flex items-center g-2">
                            <WaterIcon sx={{ fontSize: '48px' }} />
                            <div className="flex flex-col justify-between">
                                <Typography
                                    mt=".5rem"
                                    lineHeight="1rem"
                                    fontSize="medium"
                                    fontWeight="bold"
                                >
                                    {forecastToday.humidity}%
                                </Typography>
                                <Typography variant="body2">Humidity</Typography>
                            </div>
                        </div>
                        <div className="flex items-center g-2">
                            <AirIcon sx={{ fontSize: '48px' }} />
                            <div className="flex flex-col justify-between">
                                <Typography
                                    mt=".5rem"
                                    lineHeight="1rem"
                                    fontSize="medium"
                                    fontWeight="bold"
                                >
                                    {forecastToday.windSpeed}km/h
                                </Typography>
                                <Typography variant="body2">Wind</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default WeatherHeaderCard;
