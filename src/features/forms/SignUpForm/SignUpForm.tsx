import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './SignUpForm.module.css';

interface ISignUpFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ISignUpFormFields>({
    mode: 'onChange',
  });

  const password = watch('password');

  const onSubmit: SubmitHandler<ISignUpFormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Регистрация</h1>
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
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input
            type="password"
            name="password"
            className={styles.input}
            {...register('password', {
              required: 'Введите пароль',
              minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' },
            })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Подтверждение пароля
          </label>
          <input
            type="password"
            name="confirmPassword"
            className={styles.input}
            {...register('confirmPassword', {
              required: 'Подтвердите пароль',
              validate: (value) => value === password || 'Пароли не совпадают',
            })}
          />
          {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
