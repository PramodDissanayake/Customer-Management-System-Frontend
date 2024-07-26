import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';



@Component({
  selector: 'app-manage-cus',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
  templateUrl: './manage-cus.component.html',
  styleUrl: './manage-cus.component.css'
})
export class ManageCusComponent { 
  
  public customerObj ={
    firstName:"",
    lastName:"",
    email:"",
    departmentId:"",
    roleId:""
  }

  constructor(private http:HttpClient){}

  addCustomer(){
    this.http.post("http://localhost:8080/cus-controller/add-customer",this.customerObj).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire({
          title: "Customer added!",
          text: "you clicked the button",
          icon: "success"
        });
      }
    )
  }
} 
