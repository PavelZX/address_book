import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
  address: Address;
  id: number;

  constructor(private addressService: AddressService,
              private router: ActivatedRoute,
              private shoppingListService: ShoppingListService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.id = +this.router.snapshot.params.id;
    this.address = this.addressService.getAddresses()[this.id];
    this.router.params.subscribe((params: Params) => {
      const id = +params.id;
      this.address = this.addressService.getAddresses()[id];
    });
    console.log(this.address);
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.address.ingredients);
    this.route.navigate(['shopping-list']);
  }

}
