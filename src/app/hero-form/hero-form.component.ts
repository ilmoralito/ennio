import { Component, OnInit } from '@angular/core';
import { One } from '../One';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new One(18, 'Dr IQ', this.powers[0], 'Chuck Overstretch');
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }

  newHero(): void {
    this.model = new One(42, '', '');
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);
  }
}
