import React from 'react';
import styles from '../../styles/MainContainer.module.css'
import TripItem from "./TripItem";
import TripsList from "./TripsList";

const MainContainer = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.burger}><img src="/images/Hambur.svg" alt="Picture of the author" width={12} height={12}/></div>
                <div className={styles.main_text}><p>Your trips</p></div>
            </div>
            <TripsList/>
        </>
    );
};

export default MainContainer;