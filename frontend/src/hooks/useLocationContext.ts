import { useContext } from 'react';
import { LocationContext } from '@state/locationContext';

const useLocationContext = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("The selected location context isn't configured correctly");
    }
    return context;
};

export default useLocationContext;
