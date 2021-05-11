import styles from '../styles/Home.module.css'
import Sidebar from "../src/components/Sidebar";
import MainContainer from "../src/components/MainContainer";

export default function Home() {
    return (
        <div className={styles.container}>
            {/*<Sidebar/>*/}
            <MainContainer/>

        </div>
    )
}
