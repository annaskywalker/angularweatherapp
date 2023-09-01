import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/Weather';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [WeatherApiService],
})
export class MainComponent implements OnInit {
  data!: WeatherData;
  lat!: number;
  lon!: number;
  isLoading: boolean = false;

  constructor(private weatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    this.getCurrentLocationAndWeather();
  }

  private getCurrentLocationAndWeather() {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.fetchWeather();
      }
    );
  }

  private fetchWeather() {
    this.weatherApiService
      .getCurrentWeather(this.lat, this.lon)
      .subscribe((weather) => {
        this.data = weather;
      });
    this.isLoading = false;
  }

  searchPlace(query: string) {
    this.weatherApiService.searchCity(query).subscribe((place) => {
      if (place && place[0]) {
        this.lat = place[0].lat;
        this.lon = place[0].lon;
        this.fetchWeather();
      }
    });
  }

  resetLocation() {
    this.isLoading = true;
    this.getCurrentLocationAndWeather();
  }
}
