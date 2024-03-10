import Sidebar from "@/app/components/backoffice/Sidbar/Sidebar";
import Navbar from "@/app/components/backoffice/Navbar/Navbar";
import styles from './layout.module.css';

export default function Layout({ children }){
    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}