export type WeatherData = {
  weather: CurrentWeather[];
  main: Temp;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
  };
  timezone: number;
};

export type CurrentWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Temp = {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};
