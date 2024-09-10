/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number, separator: string = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy: number = 2): number => {
  const d: number = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp: RegExp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string): {x: number, y: number} => {
  const data: string[] | null = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number, number, number]): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): 'black' | 'white' => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp: RegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp: RegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never  => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): [number, number, number] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red: number = parseInt(color.substring(1, 2), 16);
    const green: number = parseInt(color.substring(2, 3), 16);
    const blue: number = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

/*
export const getNumberedArray = (arr) => arr.map((value, number) => ({ value, number }));
*/
/*let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});*/
export type TItem = {value: number, number: number};

export const getNumberedArray = (arr: number[]): TItem[] =>
  arr.map((value: number, number: number): TItem => ({ value, number }));

/*
export const toStringArray = (arr) => arr.map(({ value, number }) => `${value}_${number}`);
*/

export const toStringArray = (arr: TItem[]): string[] =>
   arr.map( ({ value, number }: TItem): string => `${value}_${number}`);

/*
export const transformCustomers = (customers) => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
*/
/*
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
let result = arr.reduce((sum, current) => sum + current, 0);

https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
*/
export type TCustomer = {name: string, age: number, isSubscribed: boolean};
export type TCustomerID = {id: number, name: string, age: number, isSubscribed: boolean};
export type TCustomers = {
  [key: number]: TCustomer
}

export const transformCustomers = (customers: TCustomerID[]): TCustomers => {
  return customers.reduce((acc: TCustomers, customer: TCustomerID): TCustomers => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};

