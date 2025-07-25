import { ForecastResponse } from '@customTypes/api/weather';
import { SanitizedForecast } from '@customTypes/api/sanitizedTypes';
import { WeatherConditionValue } from '@customTypes/weatherConditions';
import dayjs from 'dayjs';

const removeDecimal = (num: number) => {
    return Math.trunc(Number(num));
};

export const sanitizeLocationForecastData = (
    locationForecastData: ForecastResponse,
): SanitizedForecast => {
    const forecastForToday = locationForecastData.forecast.forecastday[0];

    return {
        location: locationForecastData.location,
        forecastToday: {
            temperature: removeDecimal(locationForecastData.current.temp_c),
            condition: locationForecastData.current.condition.text?.trim() as WeatherConditionValue,
            windSpeed: locationForecastData.current.wind_kph,
            humidity: locationForecastData.current.humidity,
            minTemperature: removeDecimal(forecastForToday.day.mintemp_c),
            maxTemperature: removeDecimal(forecastForToday.day.maxtemp_c),
        },
        hourlyForecast: forecastForToday.hour.map((hour) => {
            return {
                time: dayjs(hour.time).format('h:mm A'),
                condition: hour.condition.text.trim() as WeatherConditionValue,
                temperature: removeDecimal(hour.temp_c),
            };
        }),
        weeklyForecast: locationForecastData.forecast.forecastday.map((dayForecast) => {
            const dayData = dayForecast.day;
            return {
                date: dayjs(dayForecast.date).format('dddd'),
                minTemperature: removeDecimal(dayData.mintemp_c),
                maxTemperature: removeDecimal(dayData.maxtemp_c),
                chanceOfRain: dayData.daily_chance_of_rain,
                condition: dayData.condition.text.trim() as WeatherConditionValue,
            };
        }),
    };
};
