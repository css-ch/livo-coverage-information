import { Component, input } from '@angular/core';
import { TranslatedServiceProvider } from '../../models/service-provider.model';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-coverage',
  imports: [MatDivider],
  templateUrl: './coverage.component.html',
  standalone: true,
  styleUrl: './coverage.component.scss',
})
export class CoverageComponent {
  translatedServiceProvider = input.required<TranslatedServiceProvider>();
}
