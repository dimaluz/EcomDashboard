import styles from './SmallCard.module.css';


export default function SmallCard({props}){
    return (
        <div className={styles.container}>
            {props.icon}
            <div className={styles.texts}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.number}>{props.sales}</span>
            </div>
        </div>
    )
}