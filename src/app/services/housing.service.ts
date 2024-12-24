import { Injectable } from '@angular/core';
import { HousingLocation } from '../housingLocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private readonly url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    this.http.get<HousingLocation[]>(this.url).subscribe((data) => {
      // return data;
      console.log(data);
    });
    return (await data.json()) ?? [];
    
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`)
  }
}
