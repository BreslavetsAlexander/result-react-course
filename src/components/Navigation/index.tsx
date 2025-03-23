import { FC } from 'react';
import { AppBar, Container } from '@mui/material';
import { NavigationLink } from './NavigationLink';
import { LINKS } from './constants';
import styles from './styles.module.scss';

export const Navigation: FC = () => {
  return (
    <AppBar className={styles.appBar} position='static'>
      <Container maxWidth='xl'>
        {LINKS.map((link) => {
          return (
            <NavigationLink key={link.to} className={styles.navigationLink} to={link.to}>
              {link.name}
            </NavigationLink>
          );
        })}
      </Container>
    </AppBar>
  );
};
