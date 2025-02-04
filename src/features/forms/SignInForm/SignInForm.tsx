import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './SignInForm.module.css';

interface ISignInFormFields {
  email: string;
  password: string;
}

export const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInFormFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ISignInFormFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit/*onSignIn*/)}>
        <h1 className={styles.title}>Авторизация</h1>
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
              required: 'Введите пароль'
            })}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
};
