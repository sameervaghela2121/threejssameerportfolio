import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'Sameer Vaghela Components',
    brandUrl: 'https://sameervaghela.tech',
  },
});
