import { FC, ChangeEvent, useState, useRef } from 'react';
import { IconAt } from '@tabler/icons-react';
import { SignupFormValues, SignupProps } from './types';
import { DEFAULT_FORM_VALUES } from './constants';
import { Input } from '../reusables';
import styles from './styles.module.scss';

export const Signup: FC<SignupProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<SignupFormValues>(DEFAULT_FORM_VALUES);

  const onChangeForm = ({ target }: ChangeEvent<HTMLFormElement>) => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [target.name]: target.value,
      };
    });
  };

  const onSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      onChange={onChangeForm}
      onSubmit={onSubmitForm}
      onReset={() => setFormValues(DEFAULT_FORM_VALUES)}
    >
      <Input
        type='text'
        name='name'
        label='Имя'
        placeholder='Введите ваше имя'
        required
        withAsterisk
        radius='lg'
        size='md'
      />
      <Input
        type='text'
        name='username'
        label='Ник'
        placeholder='Введите ваш ник'
        required
        withAsterisk
        radius='lg'
        size='md'
        icon={<IconAt />}
      />
      <Input
        type='email'
        name='email'
        label='Ваш email'
        placeholder='Введите email'
        required
        radius='lg'
        size='md'
      />
      <div>
        <label>Пол</label>
        <div className={styles.radioInputs}>
          <label className={styles.genderLabel}>
            <input type='radio' name='gender' value='male' defaultChecked />
            Мужской
          </label>
          <label className={styles.genderLabel}>
            <input type='radio' name='gender' value='female' />
            Женский
          </label>
        </div>
      </div>
      <Input
        type='password'
        name='password'
        label='Пароль'
        placeholder='Введите пароль'
        required
        withAsterisk
        radius='lg'
        size='md'
      />
      <Input
        type='password'
        name='repeatPassword'
        label='Повторите пароль'
        placeholder='Повторите пароль'
        required
        withAsterisk
        radius='lg'
        size='md'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
