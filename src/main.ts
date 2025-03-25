import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppContainerComponent } from './app/app.container.component';
import { createCustomElement } from '@angular/elements';
import { isDevMode } from '@angular/core';
import { worker } from '../mock-server/browser';

async function enableMocking() {
  if (!isDevMode()) {
    return;
  }
  return worker.start();
}

enableMocking().then(() => {
  createApplication(appConfig)
    .then((app) => {
      const LivoCoverageInformation = createCustomElement(
        AppContainerComponent,
        {
          injector: app.injector,
        },
      );
      customElements.define(
        'livo-coverage-information',
        LivoCoverageInformation,
      );
    })
    .catch((err) => console.error(err));
});
