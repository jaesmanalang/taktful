import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <h1 className={styles.logo}>Taktful</h1>
      </div>
    </nav>
  );
};

export default Navbar;
