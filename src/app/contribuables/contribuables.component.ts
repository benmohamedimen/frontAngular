import { Component, OnInit, Injectable } from '@angular/core';

import { ContribuableService } from '../shared/contribuable.service';
import {Contribuable} from 'src/app/models/contribuable';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contribuables',
  templateUrl: './contribuables.component.html',
  styleUrls: ['./contribuables.component.css'],
  providers: [ContribuableService]
})
export class ContribuablesComponent implements OnInit {
  contribuables: Array<any>;
  contribuable: Contribuable;
  public router: Router;
  nif: any;
  constructor(private contribuableService: ContribuableService) {
    this.contribuableService = contribuableService;
  }
 ngOnInit() {
    this.contribuableService.getAll().subscribe(data => {
      this.contribuables = data;
    });
   }
   getCont(param: any) {
    this.contribuableService.getContribuable(param);
    }
}
