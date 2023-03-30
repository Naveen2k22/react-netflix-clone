import React from 'react'
import Button from '../buttons';
import LanguageSelector from './LanguageSelector';
import {ReactComponent as NetflixLogo} from '../../assets/Svgs/NetflixLogo.svg'

import styles from './header.module.scss'

const Header = (): JSX.Element => {
  return (
    <header>
      <div className={styles.container}>
        <NetflixLogo className={styles.logo}/>
        <div className={styles.wrapper}>
          <LanguageSelector />
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;