import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SortService } from 'src/app/services/sort.service';
import { Transactions } from "../../../helpers/transactions";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() account: any;
  amount = 0.0;
  toAccount = '';
  accountDetail: string;
  merchants: any;
  confirm: boolean = false;
  balanceError: boolean = false;
  success:boolean = false;


  constructor( public translate: TranslateService,
               public sort: SortService ) { }

  ngOnInit() {
    this.accountDetail = `${ this.account.type }(${this.account.id}) - `;
    this.merchants = Transactions.data.map(t => t.merchant.name);
  }

  handleConfirm() {
    if ( this.amount <= this.account.balance ) {
      this.confirm = true;
      this.balanceError = false;
    }
    else {
      this.balanceError = true;
    }
  }

  save( form: NgForm) {
    let transfer = {
      categoryCode: "",
      dates: {
        valueDate: 0
      },
      transaction: {
        amountCurrency: {
          amount: 0,
          currencyCode: "EUR"
        },
        type: "",
        creditDebitIndicator: "CRDT"
      },
      merchant: {
        name: "",
        accountNumber: "SI64397745065188826"
      }
    };
    const { toAccount, amount } = form.value;
    const { categoryCode, transaction } = Transactions.data.find(item => (item.merchant.name === toAccount));
    transfer.dates.valueDate = new Date().getTime();
    transfer.transaction.amountCurrency.amount = amount;
    transfer.categoryCode = categoryCode;
    transfer.transaction.type = transaction.type;
    transfer.merchant.name = toAccount;

    this.addData(transfer);
    form.reset();
    this.confirm = false;
    this.account.balance = this.account.balance - amount;
  }

  addData = ( transfer ) => {
    this.success = true;
    Transactions.data.push(transfer);
    ( this.sort.sort === 'date' ) && this.sort.sortByDate(this.sort.asc, Transactions.data);
    ( this.sort.sort === 'merchant' ) && this.sort.sortByMerchant(this.sort.asc, Transactions.data);
    ( this.sort.sort === 'amount' ) && this.sort.sortByAmount(this.sort.asc, Transactions.data);
    setTimeout(() => {
      this.success = false;
    }, 2000);
  }

}
