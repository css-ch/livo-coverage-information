import { http, HttpResponse } from 'msw';
import { mockData } from './mock-data';

export const handlers = [
  http.get('http://localhost/4200/hospitals', () => {
    return HttpResponse.json(mockData);
  }),
];
