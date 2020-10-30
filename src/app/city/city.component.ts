import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  JSON = window.JSON;
  firstName = new FormControl('');
  lastName = new FormControl('');
  profileForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  anotherProfileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([])
  });

  get aliases(): any {
    return this.anotherProfileForm.get('aliases') as FormArray;
  }

  addAlias(): void {
    this.aliases.push(this.formBuilder.control(''));
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  updateFirstName(): void {
    this.firstName.setValue('John');
  }

  updateLastName(): void {
    this.lastName.setValue('Doe');
  }

  updateProfile(): void {
    this.profileForm.patchValue({
      username: 'leon.kennedy',
      address: {
        street: 'Police department'
      }
    });
  }

  onSubmit(): void {
    alert(JSON.stringify(this.profileForm.value, null, 2));
  }

  onSubmitAnotherProfile(): void {
    alert(JSON.stringify(this.anotherProfileForm.value, null, 2));
  }
}
