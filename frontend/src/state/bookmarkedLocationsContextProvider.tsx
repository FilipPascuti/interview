import { useState, ReactNode, useCallback, useEffect } from 'react';
import { Location } from '@customTypes/api/weather';
import { BookmarkedLocationsContext } from './bookmarkedLocationsContext';

const getInitialState = (): Record<string, Location> => {
    const bookmarkedLocations = localStorage.getItem('bookmarkedLocations');
    return bookmarkedLocations ? JSON.parse(bookmarkedLocations) : {};
};

export const BookmarkedLocationsContextProvider = ({ children }: { children: ReactNode }) => {
    const [bookmarkedLocations, setBookmarkedLocations] =
        useState<Record<string, Location>>(getInitialState());

    const isBookmarked = useCallback(
        (location: string) => {
            return !!bookmarkedLocations[location];
        },
        [bookmarkedLocations],
    );

    const addBookmark = useCallback(
        (location: Location) => {
            setBookmarkedLocations((prevState) => ({ ...prevState, [location.name]: location }));
        },
        [setBookmarkedLocations],
    );

    const removeBookmark = useCallback(
        (locationName: string) => {
            setBookmarkedLocations((previousList) => {
                const { [locationName]: _removed, ...newState } = previousList;
                return newState;
            });
        },
        [setBookmarkedLocations],
    );

    const contextValue = {
        bookmarkedLocations,
        isBookmarked,
        addBookmark,
        removeBookmark,
    };

    useEffect(() => {
        localStorage.setItem('bookmarkedLocations', JSON.stringify(bookmarkedLocations));
    }, [bookmarkedLocations]);

    return (
        <BookmarkedLocationsContext.Provider value={contextValue}>
            {children}
        </BookmarkedLocationsContext.Provider>
    );
};
