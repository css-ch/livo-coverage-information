import { Component, input } from '@angular/core';
import { TranslatedServiceProvider } from '../../models/service-provider.model';
import { MatDivider, MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-coverage',
  imports: [MatList, MatListItem, MatDivider],
  templateUrl: './coverage.component.html',
  standalone: true,
  styleUrl: './coverage.component.scss',
})
export class CoverageComponent {
  translatedServiceProvider = input.required<TranslatedServiceProvider>();
}
