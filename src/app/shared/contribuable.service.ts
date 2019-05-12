import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contribuable} from 'src/app/models/contribuable';
@Injectable({providedIn: 'root'})
export class ContribuableService {
 constructor(private http: HttpClient) {
  }
 getAll(): Observable<any> {
    return this.http.get('//localhost:9099/contribuables');

  }
    getContribuable(NIF: number) {
      return  this.http.get('http://localhost:9099/contribuables/' + NIF);

    }

 updateContribuable(contribuable: Contribuable) {
       return  this.http.put('http://localhost:9099/contribuables/' + contribuable.NIF, contribuable);
 }
  }

