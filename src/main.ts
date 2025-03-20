import { createApplication} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {createCustomElement} from '@angular/elements';

createApplication(appConfig)
  .then((app) => {
    const LivoCoverageInformation = createCustomElement(AppComponent, { injector: app.injector})
    customElements.define('livo-coverage-information', LivoCoverageInformation)
  })
  .catch((err) => console.error(err));
