import { Component, OnInit } from '@angular/core';

import { ContribuableService } from '../shared/contribuable.service';
@Component({
  selector: 'app-contribuables',
  templateUrl: './contribuables.component.html',
  styleUrls: ['./contribuables.component.css']
})
export class ContribuablesComponent implements OnInit {
  contribuables: Array<any>;
  constructor(private contribuableService: ContribuableService) { }

  ngOnInit() {
    this.contribuableService.getAll().subscribe(data => {
      this.contribuables = data;
    });
  }

}

