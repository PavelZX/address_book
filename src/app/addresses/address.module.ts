import { NgModule } from '@angular/core';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressesComponent } from './address.component';
import { AddressItemComponent } from './address-list/address-item/address-item.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { NoAddressComponent } from './no-address/no-address.component';
import { AddressRoutingModule } from './address-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AddressesComponent,
        AddressListComponent,
        AddressItemComponent,
        AddressDetailComponent,
        AddressEditComponent,
        NoAddressComponent,
    ],
    imports: [
        AddressRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})

export class AddressModule {}
