export interface SignupFormValues {
  name: string;
  username: string;
  email: string;
  gender: string;
  password: string;
  repeatPassword: string;
}

export interface SignupProps {
  onSubmit: (values: SignupFormValues) => void;
}
