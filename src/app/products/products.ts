 import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

 import { Apiservices } from '../apiservices';
import { RouterModule } from '@angular/router';
 @Component({
  selector: 'app-products',
   imports: [RouterModule,RouterLink],
   templateUrl: './products.html',
   styleUrl: './products.css'
 })
 export class Products {
   products:any=[]=[];constructor(private apiservice:Apiservices){}
    ngOnInit(){
       this.apiservice.getProduct().subscribe((data: any)=>{this.products=data;console.log(data);});
    }

 }
