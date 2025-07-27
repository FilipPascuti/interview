import { Box, Card, CardContent, Typography } from '@mui/material';
import { Location } from '@customTypes/api/weather';
import { CurrentDayForecast } from '@customTypes/api/sanitizedTypes';

interface Props {
    location: Location;
    forecastToday: CurrentDayForecast;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SidebarLocationCard = ({ location, forecastToday, onClick }: Props) => (
    <Card
        sx={{
            cursor: 'pointer',
            width: '100%',
            borderRadius: 4,
            boxShadow: 4,
            p: 2,
            height: '8rem',
        }}
        onClick={onClick}
    >
        <CardContent
            sx={{
                height: '100%',
                '&:last-child': { p: 0 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '100%',
                    pl: 1,
                    pr: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        maxWidth: '70%',
                    }}
                >
                    <Typography variant="h6">{location.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {location.country}
                    </Typography>
                    <Typography
                        noWrap
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                        {forecastToday.condition}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'end',
                    }}
                >
                    <Typography variant="h4" sx={{ ml: 'auto' }}>
                        {forecastToday?.temperature}°
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '5rem',
                            flexDirection: 'row',
                            mt: 'auto',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="body2" color="textSecondary">
                            H:{forecastToday?.minTemperature}°
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            L:{forecastToday?.maxTemperature}°
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </CardContent>
    </Card>
);

export default SidebarLocationCard;
