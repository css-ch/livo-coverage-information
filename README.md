# LivoCoverageInformation

## Inputs

### baseUrl
Url should point to the api used to fetch service providers
- Type: string

### translations
An object containing all necessary translations
- Type: object of strings
``` typescript
// for example:
{
  acute: 'Akut',
  listBoth: 'Ist auf Liste Balance und Premium',
  listPremiumOnly: 'Ist nur auf Liste Premium',
  psychiatry: 'Psychiatrie',
  rehab: 'Reha',
  serviceProvider: 'Leistungserbringer',
  maxRateNote: 'Bei diesem Leistungserbringer ist ein Maximaltarif festgelegt. Auf welche Leistungen dieser bezogen ist und in welcher Höhe dieser ausfällt, respektive wie hoch die jeweilige Deckung und eine allfällige Kostenbeteiligung sind, wird vor dem Spitaleintritt im Rahmen der Kostengutsprache mitgeteilt.',
  specialisedClinic: 'Spezialklinik',
  higherCoPayment: 'KoBe 75%, max. CHF 10‘000/KJ',
  variant1: 'Variante 1: KoBe CHF 0',
  variant2: 'Variante 2: KoBe 25% max. CHF 5’000/KJ',
  variant3: 'Variante 3: KoBe 50% max. CHF 10’000/KJ',
  notOnListCoPayment: 'KoBe min. 75%. Die CSS deckt max. CHF 1‘500/Nacht',
  notOnListError: 'Kein Leistungserbringer gefunden',
}
```

### insurance
An object containing the necessary insurance information of the current customer
- Type: object
```typescript
type insurance = {
  livo: 'balance' | 'premium';
  variant: 1 | 2 | 3;
}
```
---
## Usage in angular project
1. import `main.js` to desired component
```typescript
// sample.component.ts
import '@css-ch/livo-coverage-information/dist/main.js'
```
2. import `CUSTOM_ELEMENTS_SCHEMA` and add to component decorators
```typescript
// sample.component.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// other imports

@Component({
// other decorators
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```
3. use custom tag in template and provide with inputs
```html
// sample.component.html
<livo-coverage-information [baseUrl]="'https://sampleapi.com'" [translations]="myTranslationObject" [insurance]="myInsuranceObject"></livo-coverage-information>
```
4. import styles
```scss
// styles.scss
@import "@css-ch/livo-coverage-information/dist/styles";
```
---
## API
They API is called on the baseURL with a get request and should return a JSON object. They JSON should equivalent to following the typescript interface:

```typescript
type ServiceProvider = [
  {
    id: number;
    name: string;
    town: string;
    types: [
      {
        type: 'acute' | 'rehab' | 'psychiatry' | 'specialised';
        balance: boolean;
        premium: boolean;
        hasMaxRate: boolean;
      },
    ];
  },
];
```
