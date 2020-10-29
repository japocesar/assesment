import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() account: object;
  title = 'makeATransfer';

  
  constructor() { }

  ngOnInit() {
    
  }

}
