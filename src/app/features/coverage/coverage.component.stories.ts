import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { CoverageComponent } from './coverage.component';
import { storybookApplicationConfig } from '../../../../.storybook/storybook-application-config';

const meta: Meta<CoverageComponent> = {
  title: 'Coverage Component',
  component: CoverageComponent,
  args: {
    translatedServiceProvider: {
      name: 'Hirslanden Klinik St. Anna',
      town: 'Luzern',
      types: [
        {
          type: 'Akut',
          list: 'Ist auf Liste Balance und Premium',
          coPayment: 'blabla',
          maxRate: undefined,
        },
      ],
    },
  },
  argTypes: {
    translatedServiceProvider: {
      control: { type: 'object' },
    },
  },
  decorators: [applicationConfig(storybookApplicationConfig)],
};

export default meta;
type Story = StoryObj<CoverageComponent>;

export const SingleType: Story = {};

export const MultipleTypes: Story = {
  args: {
    translatedServiceProvider: {
      name: 'Universitäts-Kinderspital Zürich-Eleonorenstiftung',
      town: 'Zürich',
      types: [
        {
          type: 'Akut',
          list: 'Ist auf Liste Balance und Premium',
          coPayment: 'blabla',
          maxRate: undefined,
        },
        {
          type: 'Psychiatrie',
          list: 'Ist auf Liste Balance und Premium',
          coPayment: 'blabla',
          maxRate: undefined,
        },
        {
          type: 'Reha',
          list: 'Ist auf Liste Balance und Premium',
          coPayment: 'blabla',
          maxRate: undefined,
        },
      ],
    },
  },
};

export const OnlyPremium: Story = {
  args: {
    translatedServiceProvider: {
      name: 'Hirslanden Klinik im Park',
      town: 'Zürich',
      types: [
        {
          type: 'Akut',
          list: 'Ist nur auf Liste Premium',
          coPayment: 'blabla',
          maxRate: undefined,
        },
      ],
    },
  },
};

export const WithMaxRate: Story = {
  args: {
    translatedServiceProvider: {
      name: 'Hirslanden Clinique La Colline',
      town: 'Genève',
      types: [
        {
          type: 'Akut',
          list: 'Ist nur auf Liste Premium',
          coPayment: 'blabla',
          maxRate:
            'Bei diesem Leistungserbringer ist ein Maximaltarif festgelegt. Auf welche Leistungen dieser bezogen ist und in welcher Höhe dieser ausfällt, respektive wie hoch die jeweilige Deckung und eine allfällige Kostenbeteiligung sind, wird vor dem Spitaleintritt im Rahmen der Kostengutsprache mitgeteilt.',
        },
      ],
    },
  },
};

export const HigherCoPayment: Story = {
  args: {
    translatedServiceProvider: {
      name: 'Hirslanden Klinik im Park',
      town: 'Zürich',
      types: [
        {
          type: 'Akut',
          list: 'Ist nur auf Liste Premium',
          coPayment: 'Die KoBe fällt höher aus',
          maxRate: undefined,
        },
      ],
    },
  },
};
