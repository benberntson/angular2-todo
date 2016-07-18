import './shims';
import './date-time-picker.dependencies';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {appRouteProviders} from './app/app.routes';

bootstrap(AppComponent,[
  HTTP_PROVIDERS,
  appRouteProviders
]);
