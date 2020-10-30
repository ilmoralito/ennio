import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function ValidateEmail(
  control: AbstractControl
): { [key: string]: any } | null {
  if (control.value && control.value.toLowerCase().includes('domain')) {
    return { invalidEmail: true };
  }

  return null;
}

export function ValidateNickname(
  control: AbstractControl
): { [key: string]: any } {
  if (control.value && control.value.toLowerCase().includes('domain')) {
    return { invalidNickname: true };
  }

  return null;
}

export function isCapitalized(
  control: AbstractControl
): { [key: string]: any } {
  if (control.value && control.value[0] !== control.value[0].toUpperCase()) {
    return { noValidData: true };
  }

  return null;
}

export function ItemsValidator(control: FormGroup): ValidationErrors | null {
  const itemList1 = control.get('itemList1');
  const itemList2 = control.get('itemList2');

  if (
    itemList1 &&
    itemList2 &&
    itemList1.value === 'item1' &&
    ['itemB', 'itemC', 'itemD'].includes(itemList2.value)
  ) {
    return { invalidCheck: true };
  }

  return null;
}

export function IdentityValidator(control: FormGroup): ValidationErrors | null {
  const firstName = control.get('firstName');
  const nickname = control.get('nickname');

  if (firstName && nickname && firstName.value === nickname.value) {
    return { invalidIdentity: true };
  }

  return null;
}
