import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {
  ValidateEmail,
  ValidateNickname,
  isCapitalized,
  IdentityValidator,
  ItemsValidator
} from '../app-custom-validators';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  items1: string[] = ['item1', 'item2', 'item3', 'item4'];
  items2: string[] = ['itemA', 'itemB', 'itemC', 'itemD'];
  form = this.formBuilder.group(
    {
      firstName: ['', [Validators.required, isCapitalized, IdentityValidator]],
      lastName: ['', [Validators.required, isCapitalized]],
      email: ['', [Validators.required, Validators.email, ValidateEmail]],
      nickname: [
        '',
        [Validators.required, ValidateNickname, IdentityValidator]
      ],
      itemList1: [''],
      itemList2: ['']
    },
    { validators: [IdentityValidator, ItemsValidator] }
  );

  get firstName(): AbstractControl {
    return this.form.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.form.get('lastName');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get nickname(): AbstractControl {
    return this.form.get('nickname');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
