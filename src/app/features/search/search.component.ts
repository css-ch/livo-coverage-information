import { Component, input, signal } from '@angular/core';
import { Translations } from '../../models/translations.model';
import { ServiceProvider } from '../../models/service-provider.model';
import { Insurance } from '../../models/customer.model';
import { AsyncPipe } from '@angular/common';
import { CoverageComponent } from '../coverage/coverage.component';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { mapServiceProvider } from '../../helpers/helpers';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [
    AsyncPipe,
    MatLabel,
    CoverageComponent,
    MatAutocomplete,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatFormField,
    MatOption,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true,
})
export class SearchComponent {
  translations = input.required<Translations>();
  serviceProviders = input.required<ServiceProvider[]>();
  insurance = input.required<Insurance>();

  filteredOptions: Observable<ServiceProvider[]>;
  formControl = new FormControl('');
  selectedServiceProvider = signal<ServiceProvider | undefined>(undefined);
  isSelected = signal(false);

  constructor() {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map((provider) =>
        provider
          ? this._filterOptions(provider)
          : this.serviceProviders().slice(),
      ),
    );
  }

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

  translate() {
    return mapServiceProvider(
      this.selectedServiceProvider()!,
      this.translations(),
      this.insurance(),
    );
  }
}
