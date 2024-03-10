import { fetchRecentOrders } from '@/app/lib/data';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Searh';
import styles from './CustomDataTable.module.css';

export default async function CustomDataTable({ searchParams }){

    const q = searchParams?.q || '';
    const page = searchParams?.page || 1;

    const { count, recent_orders } = await fetchRecentOrders(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Recent Orders
                <Search placeholder='Search by customer...'/>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Invoice No</td>
                        <td>Order Time</td>
                        <td>Customer Name</td>
                        <td>Method</td>
                        <td>Amount</td>
                        <td>Status</td>
                        <td>Action</td>
                        <td>Invoice</td>
                    </tr>
                </thead>
                <tbody>
                    {recent_orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.invoice_number}</td>
                            <td>{order.createdAt?.toString().slice(4, 16)}</td>
                            <td>{order.custom_name}</td>
                            <td>{order.method}</td>
                            <td>{order.amount}</td>
                            <td className={`${
                                order.status === 'pending'? styles.pending : (order.status === 'delivered'? styles.delivered : styles.canceled)
                            }`}>
                                <button>{order.status}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <Pagination total_items={count} />
            </div>
        </div>
    )
}