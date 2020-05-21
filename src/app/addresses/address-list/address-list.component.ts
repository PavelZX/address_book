import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit, OnDestroy {

  addresses: Address[] = [];
  private addressesSubscription: Subscription;

  constructor(private addressService: AddressService) {
    this.addresses = addressService.getAddresses();
  }

  ngOnInit(): void {
    this.addressesSubscription = this.addressService.addressesUpdated.subscribe((addresses: Address[]) => {
      this.addresses = addresses;
    });
  }

  ngOnDestroy() {
    this.addressesSubscription.unsubscribe();
  }

}
