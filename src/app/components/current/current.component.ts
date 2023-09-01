import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather, Temp, WeatherData } from 'src/app/models/Weather';
import {
  faMapPin,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faWind,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  @Input()
  data!: WeatherData;
  @Input()
  currentWeather!: CurrentWeather;
  imgUrl: string = '';
  faMapPin = faMapPin;
  tempMax = faTemperatureArrowUp;
  tempMin = faTemperatureArrowDown;
  wind = faWind;
  humidity = faWater;

  constructor() {}

  ngOnInit() {
    if (this.currentWeather && this.currentWeather.icon) {
      this.imgUrl = `assets/icons/${this.currentWeather.icon}.png`;
    }
  }
}
