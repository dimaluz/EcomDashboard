import LargeCard from "./LargeCard";
import styles from './LargeCards.module.css';

import { CiShoppingTag } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

export default function LargeCards(){
    const orderStats = [
        {
            title: 'Today Orders',
            sales: 110.00,
            color: 'green',
            icon: <CiShoppingTag size={50} />,
        },
        {
            title: 'Yesterday Orders',
            sales: 110.00,
            color: 'blue',
            icon: <FiShoppingCart size={50} />,
        },
        {
            title: 'This Month',
            sales: 310.00,
            color: 'orange',
            icon: <BsCashCoin size={50} />,
        },
        {
            title: 'Last Month',
            sales: 1510.00,
            color: 'purple',
            icon: <TbReportAnalytics size={50} />,
        },
    ]
    return (
        <div className={styles.container}>
            {orderStats.map((item, i) => {
                return <LargeCard 
                    key={i} 
                    props={item}
                />
            })}
        </div>
    )
}