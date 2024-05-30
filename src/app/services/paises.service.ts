import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private http = inject(HttpClient);
  constructor() {}
  getData() {
    return this.http.get('https://restcountries.com/v3.1/lang/spanish');
  }
}
