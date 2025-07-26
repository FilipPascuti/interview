import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import BookmarkLocation from '@components/bookmarkLocationButton';
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
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    height: '100%',
                }}
            >
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Box
                        component="img"
                        src={weatherIconSource(forecastToday.condition)}
                        alt="Light Rain"
                        sx={{
                            width: 200,
                        }}
                    />
                    <Box>
                        <Typography variant="h6">{forecastToday.condition}</Typography>
                        <Typography variant="h6">
                            <ThermostatIcon
                                fontSize="small"
                                sx={{ verticalAlign: 'middle', mr: 1 }}
                            />
                            Min Temperature: {forecastToday.minTemperature}°
                        </Typography>
                        <Typography variant="h6">
                            <ThermostatIcon
                                fontSize="small"
                                sx={{ verticalAlign: 'middle', mr: 1 }}
                            />
                            Max Temperature: {forecastToday.maxTemperature}°
                        </Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    sx={{
                        height: '100%',
                    }}
                >
                    <Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography fontWeight="bold" variant="h2">
                                {forecastToday.temperature}°
                            </Typography>
                            <BookmarkLocation location={location} />
                        </Box>
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <Typography variant="h6">
                                {location.name}, {location.country}
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 2, width: '100%' }} />
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-around"
                        width="100%"
                        gap={2}
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <WaterIcon sx={{ fontSize: '48px' }} />
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                            >
                                <Typography
                                    mt=".5rem"
                                    lineHeight="1rem"
                                    fontSize="medium"
                                    fontWeight="bold"
                                >
                                    {forecastToday.humidity}%
                                </Typography>
                                <Typography variant="body2">Humidity</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                            <AirIcon sx={{ fontSize: '48px' }} />
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                            >
                                <Typography
                                    mt=".5rem"
                                    lineHeight="1rem"
                                    fontSize="medium"
                                    fontWeight="bold"
                                >
                                    {forecastToday.windSpeed}km/h
                                </Typography>
                                <Typography variant="body2">Wind</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default WeatherHeaderCard;
