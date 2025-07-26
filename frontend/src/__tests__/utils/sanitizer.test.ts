import { describe, it, expect } from 'vitest';
import dayjs from 'dayjs';

import { sanitizeLocationForecastData, removeDecimal } from '@utils/sanitizer';
import { ForecastResponse, WeatherCondition } from '@customTypes/api/weather';

describe('removeDecimal', () => {
    it('truncates positive numbers', () => {
        expect(removeDecimal(12.9)).toBe(12);
        expect(removeDecimal(0.9)).toBe(0);
    });

    it('truncates negative numbers towards 0', () => {
        expect(removeDecimal(-4.9)).toBe(-4);
    });

    it('returns integers unchanged', () => {
        expect(removeDecimal(42)).toBe(42);
    });
});

describe('sanitizeLocationForecastData', () => {
    const wc = (text: string): WeatherCondition => ({
        text,
        icon: '',
        code: 0,
    });

    const mock: ForecastResponse = {
        location: {
            name: 'Bucharest',
            country: 'Romania',
        },
        current: {
            temp_c: 30.7,
            condition: wc(' Light rain '),
            wind_kph: 6,
            humidity: 83,
        },
        forecast: {
            forecastday: [
                {
                    date: '2025-07-25',
                    date_epoch: 1753401600,
                    day: {
                        maxtemp_c: 31.9,
                        mintemp_c: 28.1,
                        daily_chance_of_rain: 70,
                        condition: wc(' Light rain '),
                    },
                    hour: [
                        {
                            time: '2025-07-25 04:00',
                            temp_c: 30.2,
                            condition: wc(' Light rain '),
                        },
                        {
                            time: '2025-07-25 05:00',
                            temp_c: 29.6,
                            condition: wc(' Light rain '),
                        },
                    ],
                },
                {
                    date: '2025-07-26',
                    date_epoch: 1753488000,
                    day: {
                        maxtemp_c: 32.3,
                        mintemp_c: 27.4,
                        daily_chance_of_rain: 10,
                        condition: wc(' Sunny '),
                    },
                    hour: [],
                },
            ],
        },
    };

    it('normalizes and formats the forecast correctly', () => {
        const result = sanitizeLocationForecastData(mock);

        expect(result.location).toEqual(mock.location);

        expect(result.forecastToday.temperature).toBe(30);
        expect(result.forecastToday.minTemperature).toBe(28);
        expect(result.forecastToday.maxTemperature).toBe(31);
        expect(result.forecastToday.condition).toBe('Light rain');

        expect(result.hourlyForecast).toHaveLength(2);
        expect(result.hourlyForecast[0]).toEqual({
            time: dayjs('2025-07-25 04:00').format('h:mm A'),
            condition: 'Light rain',
            temperature: 30,
        });

        expect(result.weeklyForecast).toHaveLength(2);

        const expectedFirstDate = dayjs('2025-07-25').format('dddd');
        const expectedSecondDate = dayjs('2025-07-26').format('dddd');

        expect(result.weeklyForecast[0]).toMatchObject({
            date: expectedFirstDate,
            minTemperature: 28,
            maxTemperature: 31,
            chanceOfRain: 70,
            condition: 'Light rain',
        });

        expect(result.weeklyForecast[1]).toMatchObject({
            date: expectedSecondDate,
            minTemperature: 27,
            maxTemperature: 32,
            chanceOfRain: 10,
            condition: 'Sunny',
        });
    });
});
