import { ForecastResponse, SearchLocationResponse, Location } from '@customTypes/api/weather';
import { queryOptions } from '@tanstack/react-query';
import { sanitizeLocationForecastData } from '@utils/sanitizer';

const WEATHER_API_SEARCH_URL = 'https://api.weatherapi.com/v1/search.json';
const WEATHER_API_FORECAST_URL = 'https://api.weatherapi.com/v1/forecast.json';
const NUMBER_OF_FORECAST_DAYS = 7;

const getLocationAutocompleteValues = async (query: string): Promise<SearchLocationResponse[]> => {
    if (!query.trim()) return [];

    const url = new URL(WEATHER_API_SEARCH_URL);
    url.searchParams.set('q', query);
    url.searchParams.set('key', import.meta.env.VITE_WEATHER_API_KEY);

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error(`Failed to fetch location autocomplete values: ${response.statusText}`);
    }

    return await response.json();
};

export const locationAutocompleteValuesOptions = (inputValue: string) =>
    queryOptions({
        queryKey: ['cities', inputValue],
        queryFn: () => getLocationAutocompleteValues(inputValue),
        enabled: inputValue.length > 0,
        staleTime: 10 * 1000,
    });

export const locationForecast = async (location?: string): Promise<ForecastResponse> => {
    if (!location || !location.trim()) {
        throw new Error('Location is required to fetch the forecast.');
    }

    const url = new URL(WEATHER_API_FORECAST_URL);
    url.searchParams.set('q', location);
    url.searchParams.set('days', NUMBER_OF_FORECAST_DAYS.toString());
    url.searchParams.set('key', import.meta.env.VITE_WEATHER_API_KEY);

    const response = await fetch(url.toString());

    if (!response.ok) {
        throw new Error(
            `Failed to fetch forecast for ${location}: ${response.status} ${response.statusText}`,
        );
    }

    return (await response.json()) as ForecastResponse;
};

export const locationForecastOptions = (location: Location | null) =>
    queryOptions({
        queryKey: ['forecast', location?.name],
        queryFn: () => locationForecast(location?.name),
        enabled: !!location?.name,
        staleTime: 60 * 60 * 1000,
        select: sanitizeLocationForecastData,
    });
