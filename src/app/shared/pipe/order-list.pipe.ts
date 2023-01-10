import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, property:string | null =null, order :string ='asc'): Array<any> {
    let orden= 'asc'
    console.log(order);
    
    try {
      if (property === null) {
      }else{
        value.sort((a, b)=>{
          if (a[property] > b[property]) {
            return 1
          }if (a[property] < b[property]) {
            return -1
          }else{
            return 0
          }
        })
      }
      return (order==='asc') ? value : value.reverse()
      
    } catch (e) {
      console.log('pos fallo');
      
      return value
    }
    
  }

}
