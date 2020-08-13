import { Injectable } from '@angular/core';
import { Donnee } from './../model/donnee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonneeServiceService {

  _donnees: Donnee[] = [new Donnee()];
  donnee: Donnee = new Donnee();
  private url = 'http://localhost:8080/rest/donnee';
  private headers: HttpHeaders;
  private options: object;

  get donnees(): Donnee[]{
    return this._donnees;
  }
  constructor(private http: HttpClient) { }

  public findAll(): Observable<any> {
    return this.http.get(this.url, this.options);
  }
  public  findById(numTache: number): Observable<any> {
    return this.http.get(this.url + '/' + numTache, this.options);
  }

}
