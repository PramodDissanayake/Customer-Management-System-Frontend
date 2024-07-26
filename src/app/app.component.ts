import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageCusComponent } from './page/manage-cus/manage-cus.component';
import { ViewAllCustomerComponent } from './page/view-all-customer/view-all-customer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageCusComponent,ViewAllCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cus-app';
}
