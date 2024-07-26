import { Routes } from '@angular/router';
import { ManageCusComponent } from './page/manage-cus/manage-cus.component';
import { viewChild } from '@angular/core';
import { ViewAllCustomerComponent } from './page/view-all-customer/view-all-customer.component';

export const routes: Routes = [
    {
        path:"manage-customer",
        component:ManageCusComponent
    },
    {
        path:"view-all-customer",
        component:ViewAllCustomerComponent
    }

];
