import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { SearchComponent } from './search.component';
import { storybookApplicationConfig } from '../../../../.storybook/storybook-application-config';
import { translationsDe } from '../../../../.storybook/mock-inputs/translations';
import { mockData } from '../../../../mock-server/mock-data';

const meta: Meta<SearchComponent> = {
  title: 'Search Component',
  component: SearchComponent,
  args: {
    translations: translationsDe,
    serviceProviders: mockData,
    insurance: 'premium',
  },
  argTypes: {
    translations: {
      control: { type: 'object' },
    },
    serviceProviders: {
      control: { type: 'object' },
    },
    insurance: {
      options: ['balance', 'premium'],
      control: { type: 'radio' },
    },
  },
  decorators: [applicationConfig(storybookApplicationConfig)],
};

export default meta;
type Story = StoryObj<SearchComponent>;

export const Primary: Story = {};
