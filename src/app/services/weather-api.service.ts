import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/Weather';
import { Place } from '../models/Place';
import { environment } from './../../environment';

@Injectable()
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private geoKey = 'https://api.openweathermap.org/geo/1.0/direct?q=';
  private apiKey = environment.apiKey;

  getCurrentWeather(lat: number, lon: number): Observable<WeatherData> {
    const url = `${this.apiUrl}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }

  searchCity(query: string): Observable<Place[]> {
    const url = `${this.geoKey}${query}&appid=${this.apiKey}`;
    return this.http.get<Place[]>(url);
  }
}
