import LargeCards from "@/app/components/backoffice/LargeCard/LargeCards";
import SmallCards from "@/app/components/backoffice/SmallCard/SmallCards";
import styles from './page.module.css';
import DashboardCharts from "@/app/components/backoffice/DashboarCharts/DashboardCharts";
import CustomDataTable from "@/app/components/backoffice/CustomDataTable/CustomDataTable";

export default function DashboardPage({searchParams}){

    // const recent_orders = await fetchRecentOrders();
    // console.log(recent_orders);

    return (
        <div className={styles.container}>
            <LargeCards />
            <SmallCards />
            <CustomDataTable searchParams={searchParams}/>
            <DashboardCharts />
        </div>
    )
}