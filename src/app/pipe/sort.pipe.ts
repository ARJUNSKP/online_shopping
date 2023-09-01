import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(productData:any[],searchData:string,searchType:string): any[] {
    const Response:any=[]
    if(!productData || !searchData || !searchType){
      return productData
    }
    else{
      productData.map(item=>{
        if(item[searchType].includes(searchData)){
          Response.push(item)
        }
      })
    }
    return Response
  }

}
