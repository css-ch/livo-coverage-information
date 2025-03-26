export type ServiceProvider = {
  id: number;
  name: string;
  town: string;
  types: Types[];
};

export type Type = 'acute' | 'rehab' | 'psychiatry' | 'specialised';

export type Types = {
  type: Type;
  balance: boolean;
  premium: boolean;
  hasMaxRate: boolean;
};

export type TranslatedServiceProvider = {
  name: string;
  town: string;
  types: TranslatedTypes[];
};

export type TranslatedTypes = {
  type: string;
  list: string;
  coPayment: string;
  maxRate: string | undefined;
};
