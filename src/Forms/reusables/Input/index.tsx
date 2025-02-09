import { FC } from 'react';
import classnames from 'classnames';
import { InputProps } from './types';
import styles from './styles.module.scss';

export const Input: FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  label = '',
  description = '',
  error = '',
  variant = 'filled',
  radius = 'sm',
  size = 'sm',
  withAsterisk = false,
  disabled = false,
  icon = null,
  name = '',
  value,
  onChange,
  ...props
}) => {
  const sizeClassName = classnames({
    [styles.xsSize]: size === 'xs',
    [styles.smSize]: size === 'sm',
    [styles.mdSize]: size === 'md',
    [styles.lgSize]: size === 'lg',
    [styles.xlSize]: size === 'xl',
  });

  const radiusClassName = classnames({
    [styles.xsRadius]: radius === 'xs',
    [styles.smRadius]: radius === 'sm',
    [styles.mdRadius]: radius === 'md',
    [styles.lgRadius]: radius === 'lg',
    [styles.xlRadius]: radius === 'xl',
  });

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label} {withAsterisk && <span className={styles.asterisk}>*</span>}
        </label>
      )}

      {description && <div className={styles.description}>{description}</div>}

      <div className={classnames(styles.fieldWrapper, sizeClassName)}>
        {icon && <span className={styles.icon}>{icon}</span>}

        <input
          type={type}
          className={classnames(styles.input, sizeClassName, radiusClassName, {
            [styles.unstyled]: variant === 'unstyled',
            [styles.error]: error.length,
            [styles.disabled]: disabled,
            [styles.withIcon]: icon,
          })}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};
