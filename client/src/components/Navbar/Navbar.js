import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.Flex}>
          <h1 className={styles.logo}>Taktful</h1>
          <ul className={styles.NavList}>
            <li className={styles.NavItem}>
              <Link className={styles.NavLink} to="/">
                Home
              </Link>
            </li>
            <li className={styles.NavItem}>
              <Link className={styles.NavLink} to="/login">
                Login
              </Link>
            </li>
            <li className={styles.NavItem}>
              <Link className={styles.NavLink} to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
