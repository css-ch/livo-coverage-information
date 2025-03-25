import { Component, inject, signal } from '@angular/core';
import { ServiceProviderService } from './services/service-provider.service';
import { ServiceProvider } from './models/service-provider.model';
import { SearchComponent } from './features/search/search.component';
import { translationsDe } from '../../mock-inputs/translations';
import { customer } from '../../mock-inputs/customer';

@Component({
  selector: 'app-root',
  imports: [SearchComponent],
  templateUrl: './app.container.component.html',
  standalone: true,
})
export class AppContainerComponent {
  baseURL = 'http://localhost/4200/hospitals';
  translations = translationsDe;
  insurance = customer;

  serviceProviders = signal<ServiceProvider[]>([]);
  private serviceProviderService = inject(ServiceProviderService);

  constructor() {
    this.getServiceProviders();
  }

  getServiceProviders() {
    this.serviceProviderService.getServiceProviders(this.baseURL).subscribe({
      next: (response) => {
        this.serviceProviders.set(response);
      },
    });
  }
}
