import {
  ServiceProvider,
  TranslatedServiceProvider,
  Type,
  Types,
} from '../models/service-provider.model';
import { Translations } from '../models/translations.model';
import { Insurance } from '../models/insurance.model';

export function mapServiceProvider(
  provider: ServiceProvider,
  translations: Translations,
  insurance: Insurance,
): TranslatedServiceProvider {
  return {
    name: provider.name,
    town: provider.town,
    types: provider.types.map((type) => ({
      type: translateType(type.type, translations),
      list: type.balance ? translations.listBoth : translations.listPremiumOnly,
      higherCoPayment: translateCoPayment(type, translations, insurance),
      maxRate: type.hasMaxRate ? translations.maxRateNote : undefined,
    })),
  };
}

function translateType(type: Type, translations: Translations): string {
  switch (type) {
    case 'acute':
      return translations.acute;
    case 'rehab':
      return translations.rehab;
    case 'psychiatry':
      return translations.psychiatry;
    case 'specialised':
      return translations.specialisedClinic;
    default:
      return type;
  }
}

function translateCoPayment(
  type: Types,
  translations: Translations,
  insurance: Insurance,
): string | undefined {
  if (type.premium && insurance == 'balance') {
    return translations.higherCoPayment;
  }
  return undefined;
}
