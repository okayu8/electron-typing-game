import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextToType, TTextToType } from '.';

export default {
  title: 'TextToType',
  component: TextToType,
};

const defaultProps = { text: 'test teeee' };

export const Default: Story<TTextToType> = (args) => <TextToType {...args} />;
Default.args = { ...defaultProps };
