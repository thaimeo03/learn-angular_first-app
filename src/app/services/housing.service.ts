import { Injectable } from '@angular/core';
import { HousingLocation } from '../housingLocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private readonly url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<HousingLocation> {
    return this.http.get<HousingLocation>(`${this.url}/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`)
  }
}
