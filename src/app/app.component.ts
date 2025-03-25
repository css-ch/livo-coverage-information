import { Component, inject, input, signal } from '@angular/core';
import { ServiceProviderService } from './services/service-provider.service';
import { ServiceProvider } from './models/service-provider.model';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CoverageComponent } from './features/coverage/coverage.component';
import { translationsDe } from '../../mock-inputs/translations';
import { Translations } from './models/translations.model';
import { customer } from '../../mock-inputs/customer';
import { mapServiceProvider } from './helpers/helpers';

@Component({
  selector: 'app-root',
  imports: [
    MatAutocomplete,
    MatOption,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    AsyncPipe,
    CoverageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  baseURL = input.required<string>();
  translations: Translations = translationsDe;
  serviceProviders = signal<ServiceProvider[]>([]);
  private serviceProviderService = inject(ServiceProviderService);
  formControl = new FormControl('');
  filteredOptions: Observable<ServiceProvider[]>;
  isSelected = signal(false);
  selectedServiceProvider = signal<ServiceProvider | undefined>(undefined);
  customer = customer;

  private _filterOptions(value: string): ServiceProvider[] {
    const filterValue = value.toLowerCase();
    return this.serviceProviders().filter(
      (provider) =>
        provider.name.toLowerCase().includes(filterValue) ||
        provider.town.toLowerCase().includes(filterValue),
    );
  }

  optionSelected() {
    this.isSelected.set(true);
    this.selectedServiceProvider.set(
      this.serviceProviders().find(
        (serviceProvider) => serviceProvider.name === this.formControl.value,
      ),
    );
  }

  constructor() {
    this.getServiceProviders();
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map((provider) =>
        provider
          ? this._filterOptions(provider)
          : this.serviceProviders().slice(),
      ),
    );
  }

  getServiceProviders() {
    this.serviceProviderService
      .getServiceProviders('http://localhost/4200/hospitals')
      .subscribe({
        next: (response) => {
          this.serviceProviders.set(response);
        },
      });
  }

  translate() {
    return mapServiceProvider(
      this.selectedServiceProvider()!,
      this.translations,
      this.customer,
    );
  }
}
