import { Location } from '@customTypes/api/weather';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { locationAutocompleteValuesOptions } from '@api/weather';
import { Autocomplete, TextField } from '@mui/material';

interface Props {
    currentLocation: Location | null;
    setCurrentLocation: (value: Location | null) => void;
}

const LocationAutocomplete = ({ currentLocation, setCurrentLocation }: Props) => {
    const [inputValue, setInputValue] = useState('');
    const { data } = useQuery(locationAutocompleteValuesOptions(inputValue));

    return (
        <>
            <Autocomplete
                value={currentLocation}
                onChange={(_, newValue) => setCurrentLocation(newValue)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                options={data ?? []}
                getOptionLabel={(option) => `${option?.name}, ${option?.country}`}
                open={inputValue.length > 0 && !currentLocation}
                renderInput={(params) => (
                    <TextField {...params} placeholder="Search city..." label="Location" />
                )}
                freeSolo={false}
                sx={{
                    width: '100%',
                }}
            />
        </>
    );
};

export default LocationAutocomplete;
