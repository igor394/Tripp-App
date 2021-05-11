import React, {useState} from 'react';
import styles from '../../styles/TripItem.module.css'

const TripItem = () => {
    const [state, setState] = useState([
        {}
    ])
    return (
        <div className={styles.wraper}>
            <div className={styles.country}>
                <img src="/images/country/austria.svg" alt="strana"/>
                <p>Austria</p>
            </div>
            <div className={styles.company}>
                <p>Company</p>
                <div>Diamler ASD</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nisi!</div>
            </div>
            <div className={styles.date}>
                <p>Date</p>
                <div>Jul 14 - Sep 20, 2019</div>
            </div>
            <div className={styles.btn_view}>
                <span>View trip</span>
                <img src="/images/ArrowRight.svg" alt="Picture of the author" width={16} height={16}/>
            </div>


        </div>
    );
};

export default TripItem;