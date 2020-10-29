import { Injectable } from '@angular/core';
import { Transactions } from "../../helpers/transactions";

@Injectable({
  providedIn: 'root'
})
export class SortService {

  asc: boolean = false;
  sort:string = 'date';

  constructor() { }

  setAsc(asc:boolean) {
    this.asc = asc;
  }

  setSort(sort:string) {
    this.sort = sort;
  }

  sortByDate(asc:boolean, transactions:any) {
    return (transactions.sort((a, b) => {
      const x = new Date(a.dates.valueDate).getTime();
      const y = new Date(b.dates.valueDate).getTime();
      if ( asc )
        return x - y 
      else 
        return y - x;
    })
  )}

  sortByAmount(asc:boolean, transactions:any) {
    if ( asc )
      return transactions.sort((a, b) => a.transaction.amountCurrency.amount - b.transaction.amountCurrency.amount )
    else
      return transactions.sort((a, b) => b.transaction.amountCurrency.amount - a.transaction.amountCurrency.amount )
  }

  sortByMerchant(asc:boolean, transactions:any) {
    return (transactions.sort((a, b) => {

      if( !asc ){
        if (a.merchant.name > b.merchant.name) {
          return -1;
        }
        if (a.merchant.name < b.merchant.name) {
          return 1;
        }
        return 0;
      } else {
        if (a.merchant.name < b.merchant.name) {
          return -1;
        }
        if (a.merchant.name > b.merchant.name) {
          return 1;
        }
        return 0;
      }
     
    })
  )}
}
