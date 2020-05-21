import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Address } from '../address.model';
import { AddressService } from '../address.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  isEditMode = false;
  address: Address;
  addressForm: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private addressService: AddressService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (!isNaN(this.id)) {
        this.isEditMode = true;
        this.address = this.addressService.getAddressById(this.id);
      } else {
        this.isEditMode = false;
      }
      this.initAddressForm();
    });
  }

  initAddressForm() {

    let addressName = '';
    let url = '';
    let description = '';
    const ingredients = new FormArray([]);

    if (this.isEditMode) {
      addressName =  this.address.name;
      url = this.address.url;
      description = this.address.description;

      this.address.ingredients.forEach(ingredient => {
        ingredients.push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, Validators.required)
          })
        );
      });
    }

    this.addressForm = new FormGroup({
      name: new FormControl(addressName, Validators.required),
      url: new FormControl(url, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients
    });
  }

  getIngredientsControl() {
    return (this.addressForm.get('ingredients') as FormArray).controls;
  }

  addIngredient() {
    (this.addressForm.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    }));
  }

  deleteIngredient(index: number) {
    (this.addressForm.get('ingredients') as FormArray).removeAt(index);
  }

  onSubmit() {
    console.log(this.addressForm.value);
    if (!this.isEditMode) {
      this.addressService.addAddress(this.addressForm.value);
      this.router.navigate(['/addresses']);
    } else {
      this.addressService.updateAddress(this.id, this.addressForm.value);
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }
  }

}
