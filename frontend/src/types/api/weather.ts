export type SearchLocationResponse = Location;

export interface ForecastResponse {
    location: Location;
    current: CurrentWeather;
    forecast: Forecast;
}

export interface Location {
    name: string;
    country: string;
}

export interface CurrentWeather {
    temp_c: number;
    condition: WeatherCondition;
    wind_kph: number;
    humidity: number;
}

export interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
}

export interface Forecast {
    forecastday: ForecastDay[];
}

export interface ForecastDay {
    date: string;
    date_epoch: number;
    day: DaySummary;
    hour: HourlyForecast[];
}

export interface DaySummary {
    maxtemp_c: number;
    mintemp_c: number;
    daily_chance_of_rain: number;
    condition: WeatherCondition;
}

export interface HourlyForecast {
    time: string;
    temp_c: number;
    condition: WeatherCondition;
}
