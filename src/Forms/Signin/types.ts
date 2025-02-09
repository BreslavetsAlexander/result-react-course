export interface SigninFormValues {
  email: string;
  password: string;
}

export interface SigninProps {
  onSubmit: (values: SigninFormValues) => void;
}
