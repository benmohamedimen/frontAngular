import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ContribuableService } from '../shared/contribuable.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contribuable } from 'src/app/models/contribuable';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-validation-contribuable',
  templateUrl: './validation-contribuable.component.html',
  styleUrls: ['./validation-contribuable.component.css']
})
export class ValidationContribuableComponent implements OnInit {

  contribuable: Contribuable = new Contribuable();
 private subscription: Subscription;
    private eventSubscriber: Subscription;
  http2: any;
  headers: any;

    constructor(
        private contService: ContribuableService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }
    ngOnInit() {
      this.subscription = this.route.params.subscribe((params) => {
          this.load(params.nif);
      });
  }

  load(nif) {
      this.contService.getContribuable(nif)
          .subscribe((contribuable) => {
              this.contribuable = contribuable;
              console.log(this.contribuable);
          });
  }
  save() {
    console.log('aaaaaaaa', this.contribuable);
    if (this.contribuable.nif !== undefined) {
      console.log('aupdate');
      this.contService.updateContribuable(this.contribuable);
    } else {
      console.log('save');
      this.contService.save(this.contribuable);
    }
  }
  }
