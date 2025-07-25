import { Location } from '@customTypes/api/weather';
import { WeatherConditionValue } from '@customTypes/weatherConditions';

export interface HourForecast {
    time: string;
    condition: WeatherConditionValue;
    temperature: number;
}

export interface DayForecast {
    date: string;
    minTemperature: number;
    maxTemperature: number;
    chanceOfRain: number;
    condition: WeatherConditionValue;
}

export interface CurrentDayForecast {
    temperature: number;
    condition: WeatherConditionValue;
    windSpeed: number;
    humidity: number;
    minTemperature: number;
    maxTemperature: number;
}

export interface SanitizedForecast {
    location: Location;
    forecastToday: CurrentDayForecast;
    hourlyForecast: HourForecast[];
    weeklyForecast: DayForecast[];
}
