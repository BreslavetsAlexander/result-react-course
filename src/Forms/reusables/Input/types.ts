import { ReactNode, ChangeEvent } from 'react';

export interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  variant?: 'filled' | 'unstyled';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withAsterisk?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  name?: string;
  value?: string | number;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
