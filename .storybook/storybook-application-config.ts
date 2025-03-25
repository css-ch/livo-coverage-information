import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const storybookApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
  ],
};
