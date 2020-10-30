import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit(): void {}

  updateName(): void {
    this.name.setValue('Nancy');
  }
}
