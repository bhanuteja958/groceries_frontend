import React  from "react";
import styles from './ReasonCard.module.css';
import money from '../../../../assets/svg/delivery.svg';

function ReasonCard(props) {
    const {
        image, reasonText, reasonNo
    } = props;
    return (
        <div className={styles.reasonCard}>
            <span className={styles.reasonCard__number}>{reasonNo}</span>
            <img
              src={image}
              className={styles.reasonCard__icon} 
            />
            <p className={styles.reasonCard__text}>
                {reasonText}
            </p>
        </div>
    )
}

export default ReasonCard;