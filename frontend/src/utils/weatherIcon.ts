import { WeatherCondition, WeatherConditionValue } from '@customTypes/weatherConditions';
import ClearNight from '@assets/clear_night.png';
import Cloudy from '@assets/cloudy.png';
import LightRain from '@assets/light_rain.png';
import Rainy from '@assets/rainy.png';
import Sunny from '@assets/sunny.png';
import Thunderstorm from '@assets/thunderstorm.png';

const WeatherConditionToIconMapping: Record<WeatherCondition, string> = {
    [WeatherCondition.SUNNY]: Sunny,
    [WeatherCondition.PARTLY_CLOUDY]: Sunny,
    [WeatherCondition.CLOUDY]: Cloudy,
    [WeatherCondition.OVERCAST]: Cloudy,
    [WeatherCondition.MIST]: Cloudy,
    [WeatherCondition.PATCHY_RAIN_POSSIBLE]: LightRain,
    [WeatherCondition.PATCHY_SNOW_POSSIBLE]: LightRain,
    [WeatherCondition.PATCHY_SLEET_POSSIBLE]: LightRain,
    [WeatherCondition.PATCHY_FREEZING_DRIZZLE_POSSIBLE]: LightRain,
    [WeatherCondition.THUNDERY_OUTBREAKS_POSSIBLE]: Thunderstorm,
    [WeatherCondition.BLOWING_SNOW]: LightRain,
    [WeatherCondition.BLIZZARD]: LightRain,
    [WeatherCondition.FOG]: Cloudy,
    [WeatherCondition.FREEZING_FOG]: Cloudy,
    [WeatherCondition.PATCHY_LIGHT_DRIZZLE]: Rainy,
    [WeatherCondition.LIGHT_DRIZZLE]: Rainy,
    [WeatherCondition.FREEZING_DRIZZLE]: Rainy,
    [WeatherCondition.HEAVY_FREEZING_DRIZZLE]: Rainy,
    [WeatherCondition.PATCHY_LIGHT_RAIN]: LightRain,
    [WeatherCondition.LIGHT_RAIN]: LightRain,
    [WeatherCondition.MODERATE_RAIN_AT_TIMES]: LightRain,
    [WeatherCondition.MODERATE_RAIN]: LightRain,
    [WeatherCondition.HEAVY_RAIN_AT_TIMES]: Rainy,
    [WeatherCondition.HEAVY_RAIN]: Rainy,
    [WeatherCondition.LIGHT_FREEZING_RAIN]: Rainy,
    [WeatherCondition.MODERATE_OR_HEAVY_FREEZING_RAIN]: Rainy,
    [WeatherCondition.LIGHT_SLEET]: Rainy,
    [WeatherCondition.MODERATE_OR_HEAVY_SLEET]: Rainy,
    [WeatherCondition.PATCHY_LIGHT_SNOW]: LightRain,
    [WeatherCondition.LIGHT_SNOW]: LightRain,
    [WeatherCondition.PATCHY_MODERATE_SNOW]: LightRain,
    [WeatherCondition.MODERATE_SNOW]: Rainy,
    [WeatherCondition.PATCHY_HEAVY_SNOW]: LightRain,
    [WeatherCondition.HEAVY_SNOW]: Rainy,
    [WeatherCondition.ICE_PELLETS]: Rainy,
    [WeatherCondition.LIGHT_RAIN_SHOWER]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_RAIN_SHOWER]: LightRain,
    [WeatherCondition.TORRENTIAL_RAIN_SHOWER]: LightRain,
    [WeatherCondition.LIGHT_SLEET_SHOWERS]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_SLEET_SHOWERS]: LightRain,
    [WeatherCondition.LIGHT_SNOW_SHOWERS]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_SNOW_SHOWERS]: LightRain,
    [WeatherCondition.LIGHT_SHOWERS_OF_ICE_PELLETS]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS]: LightRain,
    [WeatherCondition.PATCHY_LIGHT_RAIN_WITH_THUNDER]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER]: Thunderstorm,
    [WeatherCondition.PATCHY_LIGHT_SNOW_WITH_THUNDER]: Thunderstorm,
    [WeatherCondition.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER]: Thunderstorm,
    [WeatherCondition.CLEAR]: ClearNight,
    [WeatherCondition.PARTLY_CLOUDY_ALT]: Sunny,
    [WeatherCondition.PATCHY_RAIN_NEARBY]: LightRain,
    [WeatherCondition.PATCHY_SNOW_NEARBY]: LightRain,
    [WeatherCondition.PATCHY_SLEET_NEARBY]: LightRain,
    [WeatherCondition.PATCHY_FREEZING_DRIZZLE_NEARBY]: LightRain,
    [WeatherCondition.THUNDERY_OUTBREAKS_NEARBY]: Thunderstorm,
    [WeatherCondition.PATCHY_LIGHT_RAIN_WITH_THUNDER_ALT]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER_ALT]: Thunderstorm,
    [WeatherCondition.PATCHY_LIGHT_SNOW_WITH_THUNDER_ALT]: LightRain,
    [WeatherCondition.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER_ALT]: Rainy,
};

export const weatherIconSource = (condition: WeatherConditionValue) => {
    return WeatherConditionToIconMapping[condition] ?? Sunny;
};
