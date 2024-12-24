import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housingLocation';
import { CommonModule } from '@angular/common';
import {HousingService} from '../../services/housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  providers: [HousingService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  filteredLocationList: HousingLocation[] = []

  constructor(
    private housingService: HousingService
  ) {
    this.housingService.getAllHousingLocations().subscribe(
      (housingLocationList) => {
        this.housingLocationList = housingLocationList
        this.filteredLocationList = housingLocationList
      }
    )
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList
      return
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
