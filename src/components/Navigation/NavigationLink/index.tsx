import { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router';
import { Link } from '@mui/material';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const NavigationLink: FC<LinkProps> = ({ className, ...otherProps }) => {
  return (
    <Link component={RouterLink} className={classnames(styles.link, className)} {...otherProps} />
  );
};
