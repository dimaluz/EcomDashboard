import Link from 'next/link';
import styles from './Sidebar.module.css';
import Image from 'next/image';

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from 'react-icons/md';

export default function Sidebar(){
    return(
        <div className={styles.container}>
            <Link href="#">Logo</Link>
            <div className={styles.user}>
                <Image
                    className={styles.userImage} 
                    src="/next.svg" 
                    alt="" 
                    width="50" 
                    height="50" 
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>John</span>
                    <span className={styles.userTitle}>Admin</span>
                </div>
            </div>
            <div className={styles.menuList}>
                <Link className={styles.menuItem} href="#">Dashboard</Link>
                <Link className={styles.menuItem} href="#">Catalogue</Link>
                <Link className={styles.menuItem} href="#">Customers</Link>
                <Link className={styles.menuItem} href="#">Markets</Link>
                <Link className={styles.menuItem} href="#">Accounts</Link>
                <Link className={styles.menuItem} href="#">Orders</Link>
                <Link className={styles.menuItem} href="#">Staff</Link>
                <Link className={styles.menuItem} href="#">Settings</Link>
                <Link className={styles.menuItem} href="#">Online Store</Link>
            </div>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    )
}