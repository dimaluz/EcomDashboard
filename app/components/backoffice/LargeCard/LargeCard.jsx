import { CiShoppingTag } from "react-icons/ci";

import styles from './LargeCard.module.css';

export default function LargeCard({ props }){
    return(
        <div className={[styles.container, styles[`${props.color}`]].join(' ')}>
            {props.icon}
            <div className={styles.texts}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.number}>$ {props.sales}</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>12%</span> more than previos week
                </span>
            </div>
        </div>
    )
}