import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { locationForecastOptions } from '@api/weather';
import { Location } from '@customTypes/api/weather';
import SidebarLocationCard from '@components/sidebarLocationCard';

interface Props {
    location: Location;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const BookmarkedLocationCard = ({ location, onClick }: Props) => {
    const { data, isLoading } = useQuery(locationForecastOptions(location));

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-32">
                <CircularProgress />
            </div>
        );
    }

    if (!data) return null;

    return (
        <SidebarLocationCard
            location={location}
            forecastToday={data.forecastToday}
            onClick={onClick}
        />
    );
};

export default BookmarkedLocationCard;
