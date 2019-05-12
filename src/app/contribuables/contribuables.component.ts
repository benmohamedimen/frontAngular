import { Component, OnInit, Injectable } from '@angular/core';

import { ContribuableService } from '../shared/contribuable.service';
import {Contribuable} from 'src/app/models/contribuable';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-contribuables',
  templateUrl: './contribuables.component.html',
  styleUrls: ['./contribuables.component.css'],
  providers: [ContribuableService]
})
export class ContribuablesComponent implements OnInit {
  contribuables: Array<any>;
  contribuable: Contribuable;
  constructor(private contribuableService: ContribuableService) { }
 ngOnInit() {
    this.contribuableService.getAll().subscribe(data => {
      this.contribuables = data;
    });
   }

  public updateContribuable(contribuable) {
  this.contribuableService.updateContribuable(this.contribuable).subscribe(data => {
      console.log(data);
      });
        }
 }
