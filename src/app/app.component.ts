import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceProviderService } from './services/service-provider.service';
import { ServiceProvider } from './models/service-provider.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  private serviceProviderService = inject(ServiceProviderService);
  title = 'livo-coverage-information';
  serviceProviders = signal<ServiceProvider[]>([]);

  constructor() {
    this.getServiceProviders();
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
