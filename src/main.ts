import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { provideForms, disableDeprecatedForms } from "@angular/forms";


import { AppComponent, environment } from './app/';
import { APP_ROUTES } from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTES, HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);

