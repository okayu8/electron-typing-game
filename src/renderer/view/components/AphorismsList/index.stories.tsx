import { Story } from '@storybook/react/types-6-0';
import { AphorismsList, TAphorismsList } from '.';
import { words } from '../../../../common/__mocks__/words';

export default {
  title: 'AphorismsList',
  component: AphorismsList,
};

const defaultProps = {
  text: 'Aphorisms List',
  words: words,
};

export const Default: Story<TAphorismsList> = (args) => (
  <AphorismsList {...args} />
);
Default.args = { ...defaultProps };
