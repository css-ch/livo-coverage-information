import {Component, input} from '@angular/core';
import {ServiceProvider} from '../../models/service-provider.model';
import {MatDivider, MatList, MatListItem} from '@angular/material/list';
import {Translations} from '../../models/translations.model';

@Component({
  selector: 'app-coverage',
  imports: [
    MatList,
    MatListItem,
    MatDivider
  ],
  templateUrl: './coverage.component.html',
  standalone: true,
  styleUrl: './coverage.component.scss'
})
export class CoverageComponent {
  serviceProvider = input.required<ServiceProvider>();
  translations = input.required<Translations>();
}
