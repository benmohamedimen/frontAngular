import { ValidationContribuableComponent } from './validation-contribuable.component';
import { Route } from '@angular/router';

export const validationRoute: Route = {
    path: 'contribuables/validation/:nif',
    component: ValidationContribuableComponent,
    outlet: 'validation'
};
