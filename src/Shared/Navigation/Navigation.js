import React from 'react';
import logo from '../../assets/svg/logo.svg';
import cartIcon from '../../assets/svg/shopping_cart.svg';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <header className={styles.header}> 
            <img
              src={logo}
              alt="Company Logo (Groceries)"
              className={styles.header__logo}
            />
            <nav className={styles.header__nav}>
                <a href="#" className={styles.header__link}>Home</a>
                <a href="#" className={styles.header__link}>Shop</a>
                <a href="#" className={styles.header__link}>Conatct</a>
                <a href="#" className={styles.header__link}>FAQ's</a>
                <a href="#" className={styles.header__link}>
                    <img src={cartIcon} alt="Cart Icon" />
                </a>
            </nav>
        </header>
    )
}

export default Navigation