/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 * */
export type Category = {
  id: string;
  name: string;
  photo?: string;
};

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 * */
export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
 
/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 * */
export type Operation = Cost | Profit;

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 * */
export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

/**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';

};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const cat = createRandomCategory();

  const prid: number = Math.floor(Math.random() * 1000);
  const p: Product = {
    id: `prd_${prid}`,
    name: `Продукт №${prid}`,
    photo: `Фото Продукта №${prid}`,
    desc: Math.random() > 0.5 ? `Описание Продукта №${prid}` : undefined, //?
    createdAt: createdAt,
    oldPrice: Math.random() > 0.5 ? Math.random() * 1000 : undefined, //?
    price: Math.random() * 1000,
    category: cat
  };
  return p;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const cat = createRandomCategory();

  const oprid: number = Math.floor(Math.random() * 1000);
  const optype: 'Profit' | 'Cost' = Math.random() > 0.5 ? 'Profit' : 'Cost';
  const op: Operation = {
    id: `op_${oprid}`,
    name: `Операция №${oprid}`,
    desc: Math.random() > 0.5 ? `Описание Операции ${optype} №${oprid}` : undefined, //?
    createdAt: createdAt,
    amount: Math.floor(Math.random() * 100),
    category: cat,
    type: optype
  };
  return op;
};

/**
 * Создает случайную категорию (Category).
 * Без входных параметров
 * */
const createRandomCategory = (): Category => {
  const crid: number = Math.floor(Math.random() * 1000);
  const cat: Category = {
    id: `cat_${crid}`,
    name: `Категория №${crid}`,
    photo: Math.random() > 0.5 ? `Фото для Категории №${crid}` : undefined //?
  };
  return cat;
}