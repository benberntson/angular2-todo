import { provideRouter, RouterConfig } from '@angular/router';
import { ListComponent } from './todo-list/list.component';

const appRoutes: RouterConfig = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  //TODO: Add DeletedListComponent and update this route
  {
    path: 'deleted',
    component: ListComponent
    //component: DeletedListComponent
  }
];

export const appRouteProviders = [
  provideRouter(appRoutes)
];
