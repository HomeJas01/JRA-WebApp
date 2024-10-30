import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url ='https://restcountries.com/v3.1/region/europe';
  }

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}
