import { useState, ReactNode } from 'react';
import { Location } from '@customTypes/api/weather';
import { LocationContext } from './locationContext';

const initialLocation: Location = {
    name: 'Oradea',
    country: 'Romania',
};

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
    const [location, setLocation] = useState<Location | null>(initialLocation);

    const setCurrentLocation = (newLocation: Location | null) => setLocation(newLocation);

    const contextValue = {
        currentLocation: location,
        setCurrentLocation,
    };

    return <LocationContext.Provider value={contextValue}>{children}</LocationContext.Provider>;
};
