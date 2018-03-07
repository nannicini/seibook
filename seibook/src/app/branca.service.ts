import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Branca } from './branca';
import { BRANCHE } from './elenco-branche';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';

export class HeroService {
   constructor(private messageService: MessageService) { }
   getBranche(): Observable<Branca[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('BrancaService: fetched branche');
    return of(BRANCHE);
  }
}
