import React from 'react'
import styles from '../../styles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.burger}><img src="/images/Close.svg" alt="Picture of the author" width={12} height={12}/></div>
                <div className={styles.main_logo}><img src="/images/Logo.svg" alt="Picture of the author" width={134} height={38}/></div>
            </div>
            <div className={styles.btn_new_trip}><span>New Trip</span><img src="/images/Plus.svg" alt="Picture of the author" width={16} height={16}/></div>
            <div className={styles.link_list}>
                <div className={styles.link_new_trip}><img src="/images/ClockB.svg" alt="Picture of the author"/><span>Your trips</span></div>
                <div className={styles.link_future}><img src="/images/Edit.svg" alt="Picture of the author"/><span>Future feature</span></div>
                <div className={styles.link_future}><img src="/images/Globe.svg" alt="Picture of the author"/><span>Future section</span></div>
            </div>

        </div>
    );
};

export default Sidebar;

