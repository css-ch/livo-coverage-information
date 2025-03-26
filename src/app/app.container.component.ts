import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ServiceProviderService } from './services/service-provider.service';
import { ServiceProvider } from './models/service-provider.model';
import { SearchComponent } from './features/search/search.component';
import { Translations } from './models/translations.model';
import { Insurance } from './models/insurance.model';

@Component({
  selector: 'app-root',
  imports: [SearchComponent],
  templateUrl: './app.container.component.html',
  standalone: true,
})
export class AppContainerComponent implements OnInit {
  baseUrl = input.required<string>();
  translations = input.required<Translations>();
  insurance = input.required<Insurance>();
  serviceProviders = signal<ServiceProvider[]>([]);
  private serviceProviderService = inject(ServiceProviderService);

  ngOnInit() {
    this.getServiceProviders();
  }

  getServiceProviders() {
    this.serviceProviderService.getServiceProviders(this.baseUrl()).subscribe({
      next: (response) => {
        this.serviceProviders.set(response);
      },
    });
  }
}
