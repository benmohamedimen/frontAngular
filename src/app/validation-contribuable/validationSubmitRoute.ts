import { ValidationContribuableComponent } from './validation-contribuable.component';
import { Route } from '@angular/router';

export const validationSubmitRoute: Route = {
    path: 'contribuables/validation/:nif/submit',
    component: ValidationContribuableComponent,
    outlet: 'validationSubmit'
};
