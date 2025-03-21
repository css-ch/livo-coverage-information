import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { AppComponent } from './app.component';
import { storybookApplicationConfig } from '../../.storybook/storybook-application-config';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AppComponent> = {
  title: 'App Component',
  component: AppComponent,
  argTypes: {},
  decorators: [applicationConfig(storybookApplicationConfig)],
};

export default meta;
type Story = StoryObj<AppComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
