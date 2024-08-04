import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Customer } from '../models/customer.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = "http://localhost:5067/api/Customers";
  private customersSub = new BehaviorSubject<Customer[]>([]);

  constructor(private http: HttpClient) {
    this.loadAll();
  }

  loadAll() {
    this.http.get<Customer[]>(this.url).subscribe(data => {
      this.customersSub.next(data);
    });
  }

  getAll(): Observable<Customer[]> {
    return this.customersSub.asObservable();
  }

  update(customer: Customer) {
    return this.http.put(`${this.url}/${customer.id}`, customer).subscribe(response => {
      this.loadAll();
    });
  }

  create(customer: Customer) {
    return this.http.post(this.url, customer).pipe(
      tap(response => {
        this.loadAll();
      })
    );
  }
}
