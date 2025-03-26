import { Component, input } from '@angular/core';
import { TranslatedServiceProvider } from '../../models/service-provider.model';

@Component({
  selector: 'app-coverage',
  imports: [],
  templateUrl: './coverage.component.html',
  standalone: true,
  styleUrl: './coverage.component.scss',
})
export class CoverageComponent {
  translatedServiceProvider = input.required<TranslatedServiceProvider>();
}
