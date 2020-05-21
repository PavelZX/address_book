import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressesComponent } from './address.component';
import { AddressActivate } from './address-activate.route.service';
import { NoAddressComponent } from './no-address/no-address.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';

const addressRoutes: Routes = [
    {path: '', component: AddressesComponent, canActivate: [AddressActivate], children: [
        {path: '', component: NoAddressComponent},
        {path: 'new', component: AddressEditComponent},
        {path: ':id', component: AddressDetailComponent},
        {path: ':id/edit', component: AddressEditComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(addressRoutes)],
    exports: [RouterModule]
})
export class AddressRoutingModule {}
