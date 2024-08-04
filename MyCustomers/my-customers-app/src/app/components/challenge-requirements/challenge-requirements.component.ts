import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './challenge-requirements.component.html',
  styleUrl: './challenge-requirements.component.scss'
})
export class ChalllengeRequirement {
  constructor() {}
}
