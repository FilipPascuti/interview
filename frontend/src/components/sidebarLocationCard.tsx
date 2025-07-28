import { Card, CardContent, Typography } from '@mui/material';
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
            <div className="flex justify-between h-full px-2">
                <div className="flex flex-col h-full max-w-[70%]">
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
                </div>
                <div className="flex flex-col h-full justify-end">
                    <Typography variant="h4" sx={{ ml: 'auto' }}>
                        {forecastToday?.temperature}°
                    </Typography>

                    <div className="flex w-20 flex-row mt-auto justify-between">
                        <Typography variant="body2" color="textSecondary">
                            H:{forecastToday?.minTemperature}°
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            L:{forecastToday?.maxTemperature}°
                        </Typography>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default SidebarLocationCard;
