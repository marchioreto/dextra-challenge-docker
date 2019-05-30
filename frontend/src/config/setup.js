import numeral from 'numeral';
import locales from 'numeral/locales';

export const localeConfiguration = () => {
  numeral.locale('pt-br');
  numeral.defaultFormat('$ 0,000,000.00');
};
