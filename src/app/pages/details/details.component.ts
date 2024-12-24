import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingLocation } from '../../interfaces/housingLocation';
import { HousingService } from '../../services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule, RouterModule],
  providers: [HousingService],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })
  

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
                      .getHousingLocationById(housingLocationId)
                      .subscribe((housingLocation) => {this.housingLocation = housingLocation});
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '', 
      this.applyForm.value.lastName ?? '', 
      this.applyForm.value.email ?? ''
    );

    this.applyForm.reset();
  }
}
