import React from "react";
import styles from './Home.module.css';
import commonStyles from '../../App.module.css';
import ReasonCard from "./Components/ReasonCard/ReasonCard";
import delivery from "../../assets/svg/delivery.svg"
import money from "../../assets/svg/money.svg"
import fresh from "../../assets/svg/fresh.svg"
import UserTestimonialCard from "./Components/UserTestimonialCard/UserTestimonialCard";

function Home(){
    const reasons = [
        {
            image:delivery,
            reason:'We deliver items on provided date or 10% cash back on the total amount of order'
        },
        {
            image:fresh,
            reason:'We provide with fresh groceries that are taken from local farmers at affordable prices'
        },
        {
            image:money,
            reason:'We provide non-seasonal fruits & vegetables at rates that are lower than market price'
        }
    ]
    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.hero__main}>
                    <h1 className={styles.hero__headline}>
                        One stop shop <br />
                        For all Groceries
                    </h1>
                    <button
                      className={`
                       ${commonStyles.button}
                       ${commonStyles['button--large']}
                       ${commonStyles['button--green']}
                      `}
                      type="button"
                    >
                        Buy Groceries
                    </button> 
                </div>
            </section>
            <section className={styles.whyBuyHere}>
                <h2
                  className={`
                    ${commonStyles.title}
                    ${commonStyles['title--center']}
                  `}
                >
                    Why buy at Groceries?
                </h2>
                <div className={styles.whyBuyHere__reasons}>
                    { reasons.map((reason, index) => (
                        <ReasonCard image={reason.image} reasonText={reason.reason} reasonNo={index+1} key={`reason${index+1}`}/>
                    ))}
                </div>
            </section>
            <section className={styles.testimonials}>
                <h2
                  className={`
                    ${commonStyles.title}
                    ${commonStyles['title--center']}
                  `}
                >
                    What people say about us?
                </h2>
                <div className={styles.testimonials__userTestimonials}>
                    <UserTestimonialCard />
                    <UserTestimonialCard />
                    <UserTestimonialCard />
                </div>
            </section>
        </main>
    );
}

export default Home;