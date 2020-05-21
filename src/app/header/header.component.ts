import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddressService } from '../addresses/address.service';
import { AuthenticationService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    collapsed = true;
    loggedIn = false;

    constructor(private addressService: AddressService, private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.authenticationService.userSubject.subscribe(user => {
            this.loggedIn = !!user;
        });
    }

    onSaveData() {
        this.addressService.saveAddresses().subscribe();
    }

    onFetchData() {
        this.addressService.getAddressesFromFireBase().subscribe();
    }

    logout() {
        this.authenticationService.logout();
    }

}
