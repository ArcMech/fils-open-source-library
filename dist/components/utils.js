import { defaults, filter, find, first, get, isArray, isNull, orderBy, pick, omitBy, replace, capitalize as capitalizeString } from 'lodash';
import moment from 'moment';
import numeral from 'numeral';
import { conformToMask } from 'react-text-mask';
export const latest = data => first(orderBy(data, ['created_at'], ['desc']));
export const mapToArray = data => isArray(data) ? data : Object.keys(data).map(key => [key, data[key]]);
export const removeEmptyStrings = obj => {
  let newObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop] !== '') {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};
export const capitalize = (string = '') => {
  return capitalizeString(string);
};
export const intersection = (obj, defaultValues) => pick(defaults(omitBy(obj, isNull), defaultValues), Object.keys(defaultValues));
export const calculateMonthlyCost = ({
  amount,
  months,
  rate
}) => {
  const irr0 = rate / 100 / 12.0;
  const irr1 = Math.pow(irr0 + 1.0, months) - 1.0;
  const irr2 = irr0 / irr1;
  const irr3 = irr0 + irr2;
  return Math.round(irr3 * amount);
};
export const sortRequests = requests => orderBy(requests, ['id'], ['desc']);
export const sortTransactions = transactions => orderBy(transactions, ['request_date'], ['desc']);
export const formatDate = date => {
  if (!moment(date).isValid()) {
    return '-';
  }

  return moment(date).format('MM/DD/YYYY');
};
export const formatDateTime = date => moment(date).format('MM/DD/YYYY HH:MM');
export const formatMoney = (amount, currency, {
  showFraction = false
} = {}) => {
  if (!amount && amount !== 0 || !currency) {
    return '-';
  }

  const format = showFraction ? '0,0.00' : '0,0';
  const formattedAmount = numeral(amount).format(format);
  return `${formattedAmount} ${currency}`;
}; // For cases when currency needs to be displayed in different font size

export const formatNumber = (amount, {
  showFraction = false
} = {}) => {
  if (!amount && amount !== 0) {
    return '-';
  }

  const format = showFraction ? '0,0.00' : '0,0';
  return numeral(amount).format(format);
};
export const fixNumbers = num => (Math.round(num * 100) / 100).toFixed(2); // Turns document file name into document name
// promissary_note.pdf => Promissary note

export const documentName = (fileName = '') => {
  return capitalize(fileName.split(/[._]/).slice(0, -1).join(' '));
};
export const unformatMobile = string => {
  // Turns output produced by masked input
  // (+49) 333 - 321 - 101
  // into format acceptable by API:
  // Mobile number must be entered in the format: '+999999999'. Up to 15 digits allowed.
  // Removes: (, ), -, and white space
  const blackList = /[\(\)-\s]+/g;
  return replace(string, blackList, '');
};
export const unformatIban = string => {
  // Turns output produced by masked input
  // SA 00-0000-0000-0000-0000-0000
  // SA 00-0000-0000-0000-0000-____
  // into desired format
  // SA0000000000000000000000
  // Removes: -, _, and white space
  const blackList = /[-_\s]+/g;
  return replace(string, blackList, '');
};
export const formatIban = value => {
  // https: github.com/text-mask/text-mask/blob/master/componentDocumentation.md#included-conformtomask
  if (value === null) {
    return 'No IBAN';
  } else {
    const conformedIban = conformToMask(value, ibanMask(), {
      guide: false
    });
    console.log(conformedIban.conformedValue);
    return conformedIban.conformedValue;
  }
};
export const mobileMaskDev = ['(', /[\+]{1}/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]; // (+966) 55-755-7101

export const mobileMaskProd = ['(', /[\+]{1}/, /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
export const mobileMask = () => {
  return process.env.NODE_ENV === 'development' ? mobileMaskDev : mobileMaskProd;
}; // SA 00-0000-0000-0000-0000-0000

export const ibanMask = () => {
  return ['S', 'A', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}; // 1990-03-31

export const dateMask = () => {
  return [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
};