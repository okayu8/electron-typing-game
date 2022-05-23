import { Story } from '@storybook/react/types-6-0';
import { Button, TButton } from '.';

export default {
  title: 'Button',
  component: Button,
};

const defaultProps = {};

export const Default: Story<TButton> = (args) => (
  <Button {...args}>Button</Button>
);
Default.args = { ...defaultProps };
