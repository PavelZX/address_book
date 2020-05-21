import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressService } from './address.service';

@Injectable({
    providedIn: 'root'
})
export class AddressResolver implements Resolve<Observable<any>> {
    constructor(private addressService: AddressService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.addressService.getAddressesFromFireBase();
    }
}
