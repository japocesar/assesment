import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
import { Transactions } from "../../../helpers/transactions";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  title = 'recentTransactions';
  transactions:any[] = [];
  filter: string = '';
  order:string = 'date';
  asc:boolean = false;

  constructor( public sort: SortService ) { }

  ngOnInit() {
    this.transactions = this.sort.sortByDate(this.asc, Transactions.data);
  }

  handleFilter(e:any) {
    this.transactions = Transactions.data.filter(t => t.merchant.name.toLowerCase().includes(e));
  }

  clearFilter(){
    this.transactions = Transactions.data;
    this.filter = '';
  }

  handleSort(query:string) {
    this.asc = ( query === this.order ) ? !this.asc : false;
    this.sort.setAsc( this.asc );
    this.sort.setSort( query );
    switch (query) {
      case 'date':
        this.sort.sortByDate(this.asc, this.transactions);
        break;

      case 'amount':
        this.sort.sortByAmount(this.asc, this.transactions);
        break;

      case 'merchant':
        this.sort.sortByMerchant(this.asc, this.transactions);
          break;
    
      default:
        break;
    }
    this.order = query;
  }

  getClass( c:string ) {
    const activeClass = ( this.order === c ) ? 'active' : '';
    return activeClass;
  }
}
