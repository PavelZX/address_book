import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../address.model';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {

  @Input()
  address: Address;

  @Input()
  id: number;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

  onAddressSelect() {
    this.addressService.selectedAddress = this.address;
  }

}
