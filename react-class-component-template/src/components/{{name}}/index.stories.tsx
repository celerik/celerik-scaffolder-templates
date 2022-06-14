import { ComponentMeta, ComponentStory } from '@storybook/react';
import {{component-name}} from '.';

export default {
  title: 'Example/{{component-name}}',
  component: {{component-name}}
} as ComponentMeta<typeof {{component-name}}>;

const Template: ComponentStory<typeof {{component-name}}> = (args) => <{{component-name}} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
