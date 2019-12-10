import { Injectable } from '@angular/core';
import { Page } from '../dummy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Item{
  id:string;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  apiURL = 'https://swapi.co/api/planets';

  constructor(private _httpClient: HttpClient) {}

  getPlanetsPage (page: number) : Observable<Page> {
    return this._httpClient.get<Page>(`${this.apiURL}/?page=${page}`);
  }

  getPlanetsPageByURL (url: string) : Observable<Page> {
    return this._httpClient.get<Page>(url);
  }

  getPlanetsPageByName (name: string) : Observable<Page> {
    return this._httpClient.get<Page>(`${this.apiURL}/?search=${name}`);
  }

}