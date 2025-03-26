import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ServiceProviderService } from './services/service-provider.service';
import { ServiceProvider } from './models/service-provider.model';
import { SearchComponent } from './features/search/search.component';
import { translationsDe } from '../../mock-inputs/translations';
import { customer } from '../../mock-inputs/customer';

@Component({
  selector: 'app-root',
  imports: [SearchComponent],
  templateUrl: './app.container.component.html',
  styleUrls: ['./app.container.component.scss'],
  standalone: true,
})
export class AppContainerComponent implements OnInit {
  baseUrl = input.required<string>();
  translations = translationsDe;
  insurance = customer;
  serviceProviders = signal<ServiceProvider[]>([]);
  private serviceProviderService = inject(ServiceProviderService);

  constructor() {}

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
