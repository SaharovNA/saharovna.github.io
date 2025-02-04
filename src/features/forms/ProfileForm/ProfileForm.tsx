import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './ProfileForm.module.css';

interface IProfileFormFields {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const ProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProfileFormFields>({
    mode: 'onChange',
  });

  const newPassword = watch('newPassword');

  const onSubmit: SubmitHandler<IProfileFormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Редактирование профиля</h1>

        {/* Email */}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Адрес почты
          </label>
          <input
            type="email"
            name="email"
            className={styles.input}
            {...register('email', {
              required: 'Введите адрес почты',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Некорректный адрес почты',
              },
            })}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        {/* Current Password */}
        <div className={styles.field}>
          <label htmlFor="currentPassword" className={styles.label}>
            Текущий пароль
          </label>
          <input
            type="password"
            name="currentPassword"
            className={styles.input}
            {...register('currentPassword', { required: 'Введите текущий пароль' })}
          />
          {errors.currentPassword && <p className={styles.error}>{errors.currentPassword.message}</p>}
        </div>

        {/* New Password */}
        <div className={styles.field}>
          <label htmlFor="newPassword" className={styles.label}>
            Новый пароль
          </label>
          <input
            type="password"
            name="newPassword"
            className={styles.input}
            {...register('newPassword', {
              required: 'Введите новый пароль',
              minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' },
            })}
          />
          {errors.newPassword && <p className={styles.error}>{errors.newPassword.message}</p>}
        </div>

        {/* Confirm New Password */}
        <div className={styles.field}>
          <label htmlFor="confirmNewPassword" className={styles.label}>
            Подтвердите новый пароль
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            className={styles.input}
            {...register('confirmNewPassword', {
              required: 'Подтвердите новый пароль',
              validate: (value) => value === newPassword || 'Пароли не совпадают',
            })}
          />
          {errors.confirmNewPassword && <p className={styles.error}>{errors.confirmNewPassword.message}</p>}
        </div>

        {/* Кнопка */}
        <button type="submit" className={styles.button}>
          Сохранить изменения
        </button>
      </form>
    </div>
  );
};
