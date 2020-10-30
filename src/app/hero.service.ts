import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './Hero';
import { HEROES } from './HEROES';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
