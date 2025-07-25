import { createContext } from 'react';
import { Location } from '@customTypes/api/weather';

type LocationContextType = {
    currentLocation: Location | null;
    setCurrentLocation: (location: Location | null) => void;
};

export const LocationContext = createContext<LocationContextType | null>(null);
