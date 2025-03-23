import { FC, ChangeEvent, useState, useRef } from 'react';
import { SigninFormValues, SigninProps } from './types';
import { DEFAULT_FORM_VALUES } from './constants';
import { Input } from '../reusables';

export const Signin: FC<SigninProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<SigninFormValues>(DEFAULT_FORM_VALUES);

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
        type='email'
        name='email'
        label='Ваш email'
        placeholder='Введите email'
        required
        withAsterisk
        radius='lg'
        size='md'
      />
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
      <button type='submit'>Submit</button>
    </form>
  );
};
