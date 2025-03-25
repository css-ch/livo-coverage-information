import { ServiceProvider } from '../src/app/models/service-provider.model';

export const mockData: ServiceProvider[] = [
  {
    id: 1,
    name: 'Hirslanden Klinik Aarau',
    town: 'Aarau',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Hirslanden Klinik Birshof',
    town: 'Münschenstein',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Hirslanden Klinik Linde',
    town: 'Biel',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Hirslanden Clinique La Colline',
    town: 'Genève',
    types: [
      {
        type: 'acute',
        balance: false,
        premium: true,
        hasMaxRate: true,
      },
    ],
  },
  {
    id: 5,
    name: 'Hirslanden Klinik St. Anna',
    town: 'Luzern',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 6,
    name: 'Hirslanden Klinik St. Anna Meggen',
    town: 'Meggen',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 7,
    name: 'Hirslanden Klinik im Park',
    town: 'Zürich',
    types: [
      {
        type: 'acute',
        balance: false,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 8,
    name: 'Universitäts-Kinderspital Zürich-Eleonorenstiftung',
    town: 'Zürich',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
      {
        type: 'psychiatry',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
      {
        type: 'rehab',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
  {
    id: 9,
    name: 'Inselspital',
    town: 'Bern',
    types: [
      {
        type: 'acute',
        balance: true,
        premium: true,
        hasMaxRate: false,
      },
      {
        type: 'rehab',
        balance: false,
        premium: true,
        hasMaxRate: false,
      },
    ],
  },
];
