import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './ProductForm.module.css';
import { Product } from 'src/homeworks/ts1/3_write';

interface ProductFormProps {
  product?: Product;
  onSaveProduct: (data: Product) => void;
}

export const ProductForm: FC<ProductFormProps> = ({ product, onSaveProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: product || {
      id: '',
      price: 0,
      photo: '',
      name: '',
      desc: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: Product) => {
    console.log(data);
    onSaveProduct(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>{product ? 'Редактировать продукт' : 'Добавить продукт'}</h2>

      {/* Название */}
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Название
        </label>
        <input
          name="name"
          className={styles.input} 
          {...register('name', { required: 'Введите название продукта' })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      {/* Цена */}
      <div className={styles.field}>
        <label htmlFor="price" className={styles.label}>
          Цена
        </label>
        <input
          name="price"
          className={styles.input}
          {...register('price',
            { required: 'Введите цену продукта',
                min: 0.0,
                max: 10000.0,
                pattern: {
                    value: /^([0-9]*[.])?[0-9]+$/,
                    message: 'Некорректная цена',
                  },
            })} 
        />
        {errors.price && <p className={styles.error}>{errors.price.message}</p>}
      </div>

      {/* URL изображения */}
      <div className={styles.field}>
        <label htmlFor="photo" className={styles.label}>
          URL изображения
        </label>
        <input
          name="photo"
          className={styles.input}
          {...register('photo', { required: 'Введите URL изображения' })}
        />
        {errors.photo && <p className={styles.error}>{errors.photo.message}</p>}
      </div>

      {/* Описание */}
      <div className={styles.field}>
        <label htmlFor="desc" className={styles.label}>
          Описание
        </label>
        <textarea
          name="desc"
          className={styles.textarea}
          {...register('desc', { required: 'Введите описание' })}
        />
        {errors.desc && <p className={styles.error}>{errors.desc.message}</p>}
      </div>

      {/* Кнопка */}
      <button type="submit" className={styles.button}>
        {product ? 'Сохранить изменения' : 'Добавить продукт'}
      </button>
    </form>
  );
};
