import { useContext } from 'react';
import { BookmarkedLocationsContext } from '@state/bookmarkedLocationsContext';

const useBookmarkedLocationsContext = () => {
    const context = useContext(BookmarkedLocationsContext);
    if (!context) {
        throw new Error("The bookmarked locations context isn't configured correctly");
    }
    return context;
};

export default useBookmarkedLocationsContext;
