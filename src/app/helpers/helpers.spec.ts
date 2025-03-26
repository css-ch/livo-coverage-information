import { mapServiceProvider } from './helpers';
import { ServiceProvider } from '../models/service-provider.model';
import { Translations } from '../models/translations.model';
// Created with ChatGPT

// Mock translations
const translations: Translations = {
  serviceProvider: 'Service Provider',
  acute: 'Akut',
  rehab: 'Reha',
  psychiatry: 'Psychiatrie',
  specialisedClinic: 'Spezialklinik',
  listBoth: 'Beide Listen',
  listPremiumOnly: 'Nur Premium-Liste',
  maxRateNote: 'Maximaler Satz Hinweis',
  higherCoPayment: 'Höherer Selbstbehalt',
};

// Mock provider
const provider: ServiceProvider = {
  id: 1,
  name: 'Test Clinic',
  town: 'Test Town',
  types: [
    {
      type: 'acute',
      balance: true,
      hasMaxRate: true,
      premium: false,
    },
    {
      type: 'rehab',
      balance: false,
      hasMaxRate: false,
      premium: false,
    },
    {
      type: 'psychiatry',
      balance: true,
      hasMaxRate: true,
      premium: false,
    },
    {
      type: 'specialised',
      balance: false,
      hasMaxRate: false,
      premium: false,
    },
  ],
};

describe('translateType', () => {
  it('should return the translated value for known types', () => {
    expect(
      mapServiceProvider(provider, translations, 'premium').types[0].type,
    ).toBe('Akut');
    expect(
      mapServiceProvider(provider, translations, 'premium').types[1].type,
    ).toBe('Reha');
    expect(
      mapServiceProvider(provider, translations, 'premium').types[2].type,
    ).toBe('Psychiatrie');
    expect(
      mapServiceProvider(provider, translations, 'premium').types[3].type,
    ).toBe('Spezialklinik');
  });
});

describe('translateCoPayment', () => {
  it('should return higher co-payment message when balance is false and insurance is balance', () => {
    expect(
      mapServiceProvider(provider, translations, 'balance').types[1]
        .higherCoPayment,
    ).toBe('Höherer Selbstbehalt');
  });

  it('should return undefined if balance is true or insurance is not balance', () => {
    expect(
      mapServiceProvider(provider, translations, 'premium').types[1]
        .higherCoPayment,
    ).toBeUndefined();
    expect(
      mapServiceProvider(provider, translations, 'balance').types[0]
        .higherCoPayment,
    ).toBeUndefined();
  });
});

describe('mapServiceProvider', () => {
  it('should correctly map service provider data', () => {
    const result = mapServiceProvider(provider, translations, 'balance');

    expect(result.name).toBe(provider.name);
    expect(result.town).toBe(provider.town);
    expect(result.types.length).toBe(4);

    expect(result.types[0].type).toBe('Akut');
    expect(result.types[0].list).toBe('Beide Listen');
    expect(result.types[0].higherCoPayment).toBeUndefined();
    expect(result.types[0].maxRate).toBe('Maximaler Satz Hinweis');

    expect(result.types[1].type).toBe('Reha');
    expect(result.types[1].list).toBe('Nur Premium-Liste');
    expect(result.types[1].higherCoPayment).toBe('Höherer Selbstbehalt');
    expect(result.types[1].maxRate).toBeUndefined();
  });
});
