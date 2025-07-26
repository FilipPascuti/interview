import { Button } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Location } from '@customTypes/api/weather';

interface Props {
    location: Location;
}

const BookmarkLocation = ({ location }: Props) => {
    return (
        <Button>
            <BookmarkIcon fontSize="large" />
        </Button>
    );
};

export default BookmarkLocation;
