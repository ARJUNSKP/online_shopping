import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';
import { SortPipe } from '../pipe/sort.pipe';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:any=[]
  productsort:any
  searchData:any
  // data:any
  // searchString:any
  // mydata:any=[]
  // i:any
  constructor(private ds:DataService,private rout:Router,private fb:FormBuilder){}

  ngOnInit(): void {
      this.ds.product().subscribe((Response:any)=>{
        this.product=Response
      })
  }
  searchinputform=this.fb.group({
    search:['']
  })
  SearchProduct(){
    this.searchData=this.searchinputform.value.search
    
  }
  
  productView(a:any){
    localStorage.setItem('id',a)
    this.rout.navigateByUrl('productview')
    // console.log(b);
  }
  // productSearch(productsch:any){
  //   this.data=(productsch.value).split(' ')
  //   if(this.data){
  //     this.data.forEach((item:any) =>{
  //       this.mydata.push(item.charAt(0).toUpperCase() + item.slice(1))
  //     })
  //     this.searchString= this.mydata.join(' ')
  //   }
  //   else{
  //     this.data=''
  //   }
  //   this.mydata=''
    
  //   console.log(this.searchString);
    
    
    
    // this.data.forEach( => {
      
    // })
    
  // }

}
