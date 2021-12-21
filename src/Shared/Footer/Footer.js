import React from "react";
import styles from './Footer.module.css';
import logoWhite from '../../assets/svg/logo-white.svg';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/instagram.svg';

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__copyright}>
                <img
                  src={logoWhite}
                  alt="Company logo in white"
                  className={styles.footer__logo}
                />
                <p className={styles.footer__copyrightText}>
                    Copyright &copy;2021. All rights reserved
                </p>
            </div>
            <div className={styles.footer__quickLinks}>
                <a href="#" className={styles.footer__link}>Home</a>
                <a href="#" className={styles.footer__link}>Shop</a>
                <a href="#" className={styles.footer__link}>Conatct</a>
                <a href="#" className={styles.footer__link}>FAQ's</a>
            </div>
            <div className={styles.footer__socialMedia}>
                <a href='#' className={styles.footer__socialMediaLink}>
                    <img
                        src={facebook}
                        alt="Facebook Icon"
                        className={styles.footer__socialMediaImage} 
                    />
                    <span className={styles.footer__socialMediaAddress}>@groceries</span>
                </a>
                <a href='#' className={styles.footer__socialMediaLink}>
                    <img
                        src={instagram}
                        alt="Instagram Icon"
                        className={styles.footer__socialMediaImage} 
                    />
                    <span className={styles.footer__socialMediaAddress}>@groceries</span>
                </a>
            </div>
        </div>
    )
}

export default Footer;