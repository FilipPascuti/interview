import { createContext } from 'react';
import { Location } from '@customTypes/api/weather';

type BookmarkedLocationsContextType = {
    bookmarkedLocations: Record<string, Location>;
    addBookmark: (location: Location) => void;
    removeBookmark: (locationName: string) => void;
    isBookmarked: (locationName: string) => boolean;
};

export const BookmarkedLocationsContext = createContext<BookmarkedLocationsContextType | null>(
    null,
);
