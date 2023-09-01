import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather, Temp, WeatherData } from 'src/app/models/Weather';
import {
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faWind,
  faWater,
} from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

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
  sunrise!: string;
  sunset!: string;
  imgUrl: string = '';
  tempMax = faTemperatureArrowUp;
  tempMin = faTemperatureArrowDown;
  wind = faWind;
  humidity = faWater;
  sun = faSun;
  moon = faMoon;

  constructor() {}

  ngOnInit() {
    if (this.currentWeather && this.currentWeather.icon) {
      this.imgUrl = `assets/icons/${this.currentWeather.icon}.png`;
    }
    if (this.data) {
      this.sunrise = this.getTimes(this.data.sys.sunrise, this.data.timezone);
      this.sunset = this.getTimes(this.data.sys.sunset, this.data.timezone);
    }
  }

  getTimes = (time: number, zone: number) => {
    const offset = new Date().getTimezoneOffset() * 60;
    if (offset > 0) {
      const calc = time + (zone + offset);
      return new Date(calc * 1000).toLocaleTimeString().slice(0, 5);
    } else {
      const calc = time + (zone - Math.abs(offset));
      return new Date(calc * 1000).toLocaleTimeString().slice(0, 5);
    }
  };
}
