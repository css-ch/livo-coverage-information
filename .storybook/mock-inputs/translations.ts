import { Translations } from '../../src/app/models/translations.model';

export const translationsDe: Translations = {
  acute: 'Akut',
  listBoth: 'Ist auf Liste Balance und Premium',
  listPremiumOnly: 'Ist nur auf Liste Premium',
  psychiatry: 'Psychiatrie',
  rehab: 'Reha',
  serviceProvider: 'Leistungserbringer',
  maxRateNote:
    'Bei diesem Leistungserbringer ist ein Maximaltarif festgelegt. Auf welche Leistungen dieser bezogen ist und in welcher Höhe dieser ausfällt, respektive wie hoch die jeweilige Deckung und eine allfällige Kostenbeteiligung sind, wird vor dem Spitaleintritt im Rahmen der Kostengutsprache mitgeteilt.',
  specialisedClinic: 'Spezialklinik',
  higherCoPayment: 'KoBe 75%, max. CHF 10‘000/KJ',
  variant1: 'Variante 1: KoBe CHF 0',
  variant2: 'Variante 2: KoBe 25% max. CHF 5’000/KJ',
  variant3: 'Variante 3: KoBe 50% max. CHF 10’000/KJ',
  notOnListCoPayment: 'KoBe min. 75%. Die CSS deckt max. CHF 1‘500/Nacht',
  notOnListError: 'Kein Leistungserbringer gefunden',
};
