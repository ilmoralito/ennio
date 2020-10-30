import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  maritalStatus = ['Single', 'Married', 'Divorced'];

  formGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    maritalStatus: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl('')
    }),
    aliases: new FormArray([])
  });

  get aliases(): FormArray {
    return this.formGroup.get('aliases') as FormArray;
  }

  constructor() {}

  onSubmit(): void {
    alert(JSON.stringify(this.formGroup.value, null, 2));
    this.formGroup.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      maritalStatus: '',
      address: {
        city: '',
        street: '',
        zip: ''
      }
    });
  }

  ngOnInit(): void {}

  addAlias(): void {
    this.aliases.push(new FormControl(''));
  }

  removeAlias(index: number): void {
    this.aliases.removeAt(index);
  }
}
