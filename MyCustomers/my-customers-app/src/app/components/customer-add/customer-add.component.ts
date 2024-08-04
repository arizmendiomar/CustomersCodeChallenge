import { Component, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss'
})
export class CustomerAddComponent implements OnInit {
  createUserForm: FormGroup;
  saving = signal(false);

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
    });

    this.createUserForm.controls["email"].addValidators(Validators.email);
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      this.saving.set(true);

      let newCustomer: Customer = {
        ...this.createUserForm.value
      }

      this.customerService.create(newCustomer)
        .pipe(take(1))
        .subscribe(response => {
          this.saving.set(false);
          this.createUserForm.reset();
        });
    }
  }
}
