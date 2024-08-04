import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer.interface';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridApi, GridReadyEvent, RowValueChangedEvent } from 'ag-grid-community'; // Column Definition Type Interface
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent implements OnInit{
  private gridApi!: GridApi;
  private destroyRef = inject(DestroyRef);

  customers$: Observable<Customer[]>;

  colDefs: ColDef[] = [
    { field: "id", editable: false },
    { field: "firstName", editable: true },
    { field: "lastName", editable: true },
    { field: "email", editable: true },
    { field: "created", editable: false },
    { field: "lastUpdated", editable: false }
  ];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
      this.customers$ = this.customerService.getAll().pipe(
        takeUntilDestroyed(this.destroyRef),
      );
      this.customerService.loadAll();
  }

  onRowValueChanged(event: RowValueChangedEvent): void {
    this.customerService.update(event.data);
  }

  onRowEditingStarted(event: any) {
    localStorage.setItem('customerRowIndex', event.rowIndex);
  }

  rowEditingStopped(event: any) {
    localStorage.removeItem('customerRowIndex');
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

    let customerRowIndex = localStorage.getItem("customerRowIndex");
    if (customerRowIndex != null) {
      // using setTimeout is not the best approach
      // but I'll need to invest more time to find the right way to do it
      setTimeout(() => {
        let rowIndex = Number(customerRowIndex);
        this.gridApi.setFocusedCell(rowIndex, "firstName");
        this.gridApi.startEditingCell({
          rowIndex: rowIndex,
          colKey: "firstName",
        });
      }, 100);
    }
  }
}
