import { Story } from '@storybook/react/types-6-0';
import { TextToType, TTextToType } from '.';

export default {
  title: 'TextToType',
  component: TextToType,
};

const defaultProps = {
  text: 'This is test text',
  onClearDisplayWord: () => console.log('cleared!'),
  countUpMissTypes: () => console.log('miss type'),
};

export const Default: Story<TTextToType> = (args) => <TextToType {...args} />;
Default.args = { ...defaultProps };
