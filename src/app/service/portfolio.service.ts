import { Injectable } from '@angular/core';
import { Collab } from '../domain/collab.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private url: string = '../../assets/portfoliodata.json';

  constructor(private http: HttpClient) { }

  getPortfolioData(): Observable<Collab[]> {
    return this.http.get<Collab[]>(this.url);
  }
}
