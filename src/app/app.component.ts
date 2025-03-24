import { Component, inject, signal } from '@angular/core';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  private serviceProviderService = inject(ServiceProviderService);
  serviceProviders = signal<ServiceProvider[]>([]);
  formControl = new FormControl('');
  filteredOptions: Observable<ServiceProvider[]>;

  private _filterOptions(value: string): ServiceProvider[] {
    const filterValue = value.toLowerCase();

    return this.serviceProviders().filter((provider) =>
      provider.name.toLowerCase().includes(filterValue),
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
}
