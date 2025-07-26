import { Box, Card, CardContent, CircularProgress, Skeleton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { locationForecastOptions } from '@api/weather';
import { Location } from '@customTypes/api/weather';

interface Props {
    location: Location;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const BookmarkedLocationCard = ({ location, onClick }: Props) => {
    const { data, isLoading } = useQuery(locationForecastOptions(location));

    if (isLoading) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="8rem"
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!data) return null;

    return (
        <Card
            sx={{
                cursor: 'pointer',
                width: '100%',
                borderRadius: 4,
                boxShadow: 6,
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
                        <Typography variant="h6">
                            {location?.name ?? 'Favorite Location'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {location.country}
                        </Typography>
                        <Typography
                            noWrap
                            variant="body2"
                            color="textSecondary"
                            sx={{ mt: 'auto', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {data?.forecastToday.condition}
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
                            {data?.forecastToday?.temperature}°
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
                                H:{data?.forecastToday?.minTemperature}°
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                L:{data?.forecastToday?.maxTemperature}°
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default BookmarkedLocationCard;
