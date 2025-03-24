import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceProvider } from '../models/service-provider.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceProviderService {
  private httpClient = inject(HttpClient);

  getServiceProviders(baseURL: string): Observable<ServiceProvider[]> {
    return this.httpClient.get<ServiceProvider[]>(baseURL, {
      responseType: 'json',
    });
  }
}
