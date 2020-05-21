import { Injectable, EventEmitter } from '@angular/core';
import { Address } from './address.model';
import { Ingredient } from '../shared/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    private fireBaseUrl = 'https://fir-c3f77.firebaseio.com/addresses.json';
    private addresses: Address[] = [];

    public onSelectedAddress = new EventEmitter<Address>();
    public addressesUpdated = new Subject<Address[]>();

    constructor(private httpService: HttpClient) {}

    getAddresses() {
        return this.addresses;
    }

    set selectedAddress(address: Address) {
        this.onSelectedAddress.emit(address);
    }

    getAddressById(id) {
        return this.addresses.slice()[id];
    }

    addAddress(address: Address) {
        this.addresses.push(address);
    }

    updateAddress(index: number, address: Address) {
        this.addresses[index] = address;
    }

    saveAddresses() {
        return this.httpService.put(this.fireBaseUrl, this.addresses);
    }

    getAddressesFromFireBase() {
        return this.httpService.get<Address[]>(this.fireBaseUrl)
        .pipe(tap(response => {
            this.addresses = response;
            this.addressesUpdated.next(this.addresses);
        }));
    }

}
