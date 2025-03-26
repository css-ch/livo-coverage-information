import {
  ServiceProvider,
  Type,
  TranslatedServiceProvider,
} from '../models/service-provider.model';
import { Translations } from '../models/translations.model';
import { Insurance } from '../models/insurance.model';
import { mapServiceProvider } from './helpers';
// created with ChatGPT

describe('mapServiceProvider', () => {
  let translations: Translations;
  let insurance: Insurance;

  beforeEach(() => {
    translations = {
      serviceProvider: '',
      acute: 'Acute Care',
      rehab: 'Rehabilitation',
      psychiatry: 'Psychiatry',
      specialisedClinic: 'Specialised Clinic',
      listBoth: 'Both Services Available',
      listPremiumOnly: 'Premium Services Only',
      higherCoPayment: 'Higher co-payment applies',
      variant1: 'Co-payment for Variant 1',
      variant2: 'Co-payment for Variant 2',
      variant3: 'Co-payment for Variant 3',
      maxRateNote: 'Maximum rate applies',
      notOnListCoPayment: '',
      notOnListError: '',
    };

    insurance = { livo: 'balance', variant: 1 };
  });

  it('should correctly map a service provider', () => {
    const provider: ServiceProvider = {
      id: 1,
      name: 'Test Hospital',
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
      ],
    };

    const expected: TranslatedServiceProvider = {
      name: 'Test Hospital',
      town: 'Test Town',
      types: [
        {
          type: 'Acute Care',
          list: 'Both Services Available',
          coPayment: 'Co-payment for Variant 1',
          maxRate: 'Maximum rate applies',
        },
        {
          type: 'Rehabilitation',
          list: 'Premium Services Only',
          coPayment: 'Higher co-payment applies',
          maxRate: undefined,
        },
      ],
    };

    expect(mapServiceProvider(provider, translations, insurance)).toEqual(
      expected,
    );
  });
});
