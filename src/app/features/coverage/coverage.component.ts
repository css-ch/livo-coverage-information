import {Component, input} from '@angular/core';
import {ServiceProvider} from '../../models/service-provider.model';
import {MatList, MatListItem} from '@angular/material/list';
import {Translations} from '../../models/translations.model';

@Component({
  selector: 'app-coverage',
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './coverage.component.html',
  standalone: true,
  styleUrl: './coverage.component.scss'
})
export class CoverageComponent {
  serviceProvider = input.required<ServiceProvider>();
  translations = input<Translations>();
}
