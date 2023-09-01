import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // @Input() chieldData:string | undefined
  id:any
  chieldData:any=[]
  constructor(private ds:DataService,private route:Router){}

  ngOnInit(): void {
    if(localStorage.getItem('id')){
      this.id=localStorage.getItem('id')
      this.ds.productDetails(this.id).subscribe((Response:any)=>{
        this.chieldData=Response
        console.log(this.chieldData);
      })
    }
  }
  change(){
    this.route.navigateByUrl('')
  }
}

