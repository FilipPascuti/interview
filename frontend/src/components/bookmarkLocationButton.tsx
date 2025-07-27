import { Button } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useBookmarkedLocationsContext from '@hooks/useBookmarkedLocationsContext';
import { Location } from '@customTypes/api/weather';

interface Props {
    location: Location;
}

const BookmarkLocationButton = ({ location }: Props) => {
    const { isBookmarked, addBookmark, removeBookmark } = useBookmarkedLocationsContext();

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (isBookmarked(location.name)) {
            removeBookmark(location.name);
        } else {
            addBookmark(location);
        }
    };

    return (
        <Button onClick={onClickHandler}>
            {isBookmarked(location.name) ? (
                <BookmarkIcon fontSize="large" />
            ) : (
                <BookmarkBorderIcon fontSize="large" />
            )}
        </Button>
    );
};

export default BookmarkLocationButton;
