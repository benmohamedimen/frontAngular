import { Component, OnInit } from '@angular/core';
import { DeclarationImpotsService } from '../shared/declaration-impots.service';
import { DeclarationImpots } from '../models/declarationImpots';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-declaration-impots',
  templateUrl: './declarationImpots.component.html',
  styleUrls: ['./declarationImpots.component.css']
})
export class DeclarationImpotsComponent implements OnInit {
declarationImpotss: Array<any>;
declarationImpots: DeclarationImpots;

  constructor(private declarationimpotsService: DeclarationImpotsService ) { }

  ngOnInit() {
    this.declarationimpotsService.getAll().subscribe(data => {
      this.declarationImpotss = data;
    });
  }
}

