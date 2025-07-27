import { List, ListItem } from '@mui/material';
import HourForecastDetailsCard from '@components/hourForecastDetailsCard';

interface Props<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

const ScrollableList = <T,>({ items, renderItem }: Props<T>) => (
    <List
        disablePadding
        sx={{
            boxSizing: 'border-box',
            width: '100%',
            padding: '1rem',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
    >
        {items.map((item, index) => (
            <ListItem disablePadding key={index} disableGutters sx={{ mb: 2 }}>
                {renderItem(item)}
            </ListItem>
        ))}
    </List>
);

export default ScrollableList;
