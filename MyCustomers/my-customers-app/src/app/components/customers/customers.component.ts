import { Component } from '@angular/core';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { CustomerAddComponent } from '../customer-add/customer-add.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomerAddComponent, CustomersListComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

}
