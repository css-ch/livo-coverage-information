import { provideExperimentalZonelessChangeDetection } from '@angular/core';

export const storybookApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection()],
};
