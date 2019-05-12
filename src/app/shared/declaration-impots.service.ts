import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DeclarationImpots} from 'src/app/models/declarationImpots';
@Injectable({
  providedIn: 'root'
})
export class DeclarationImpotsService {

  constructor(private http: HttpClient) {
}
getAll(): Observable<any> {
  return this.http.get('//localhost:9099/declarationImpotss');
}
}
