import React from "react";
import styles from './UserTestimonialCard.module.css';

function UserTestimonialCard() {
    return(
        <div className={styles.userTestimonial}>
            <div className={styles.userTestimonial__user}>
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="image of a user"
                  className={styles.userTestimonial__userImage}
                />
                <div className={styles.userTestimonial__userDetails}>
                    <p className={styles.userTestimonial__userName}>John Doe</p>
                    <span className={styles.userTestimonial__date}>12 April, 2020</span>
                </div>
            </div>
            <div className={styles.userTestimonial__testimonialText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam facilis reiciendis a sed et debitis, consectetur qui neque deleniti culpa nulla quas quo pariatur commodi, maxime aliquid illo corrupti explicabo. Minima quia modi incidunt culpa eum neque? Ipsa, fugiat!
            </div>
        </div>
    )
}

export default UserTestimonialCard;