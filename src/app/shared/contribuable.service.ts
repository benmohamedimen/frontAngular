import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contribuable} from 'src/app/models/contribuable';
@Injectable({providedIn: 'root'})
export class ContribuableService {
  public API = '//localhost:9099';
  public CONTRIBUABLE_API = this.API + '/contribuables';
  headers = new HttpHeaders();
 constructor(private http: HttpClient) {
  }
 getAll(): Observable<any> {
    return this.http.get('//localhost:9099/contribuables');

  }
    getContribuable(NIF: number): Observable<any> {
      return  this.http.get(this.CONTRIBUABLE_API + '/' + NIF);
    }
    save(contribuable): Observable<any> {
      this.headers.append('Accept', 'application/json;charset=UTF-8');
      const options = { headers: this.headers };
      return this.http.post(this.CONTRIBUABLE_API + '/addContribuable', contribuable, options);
    }
  remove(href: string) {
      return this.http.delete(href);
    }
    updateContribuable(contribuable) {
      console.log('qqqqqqqqq', contribuable);
      this.headers.append('Accept', 'application/json;charset=UTF-8');
      const options = { headers: this.headers };
      return this.http.put('//localhost:9099/contribuables/update', contribuable, options);
    }
    resourceUrl(resourceUrl: any, arg1: string, arg2: { headers: any; }) {
      throw new Error('Method not implemented.');
    }
  }

