import { Component, OnInit } from '@angular/core';
import { Address } from './address.model';

@Component({
  selector: 'app-addresses',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressesComponent implements OnInit {

  selectedAddress: Address;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectAddress(address) {
    this.selectedAddress = address;
  }

}
