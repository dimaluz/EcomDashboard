import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdPendingActions } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineFileDone } from "react-icons/ai";

import styles from './SmallCards.module.css';
import SmallCard from "./SmallCard";

export default function SmallCards(){
    const orderStats = [
        {
            title: 'Total Orders',
            sales: 110.00,
            icon: <HiOutlineShoppingBag size={30} />,
        },
        {
            title: 'Orders Pending',
            sales: 110.00,
            icon: <MdPendingActions size={30} />,
        },
        {
            title: 'Orders Processing',
            sales: 310.00,
            icon: <CiDeliveryTruck size={30} />,
        },
        {
            title: 'Orders Delivered',
            sales: 1510.00,
            icon: <AiOutlineFileDone size={30} />,
        },
    ]
    return (
        <div className={styles.container}>
            {orderStats.map((item, i) => {
                return <SmallCard 
                    key={i} 
                    props={item}
                />
            })}
        </div>
    )
}