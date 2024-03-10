'use client';

import BestSellingProducts from './BestSallingProducts';
import styles from './DashboardCharts.module.css';
import WeeklySalesCharts from './WeeklySalesCharts';


export default function DashboardCharts(){
    return(
        <div className={styles.container}>
            <WeeklySalesCharts />
            <BestSellingProducts />
        </div>
    )
}