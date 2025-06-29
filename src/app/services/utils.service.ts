import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

}
