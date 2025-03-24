export type ServiceProvider = {
  id: number;
  name: string;
  town: string;
  types: [
    {
      type: string;
      balance: boolean;
      premium: boolean;
      special: boolean;
    },
  ];
};
