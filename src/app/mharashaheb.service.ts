import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Mharashaheb } from './mharashaheb';
import { MHARASHAHEBS } from './mock-mharashahebs';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class MharashahebService {

  constructor(private messageService: MessageService) { }

  getMharashahebs(): Observable<Mharashaheb[]> {
    // TODO: send the message _after_ fetching the mharashahebs
    this.messageService.add('MharashahebService: fetched mharashahebs');
    return of(MHARASHAHEBS);
  }

  getMharashaheb(id: number): Observable<Mharashaheb> {
    // TODO: send the message _after_ fetching the mharashaheb
    this.messageService.add(`MharashahebService: fetched mharashaheb id=${id}`);
    return of(MHARASHAHEBS.find(mharashaheb => mharashaheb.id === id));
  }
}
