import styles from './PostModel.module.css';

export default function PostModel({title, children}) {
    return (
        <article className={styles.container}>
            <h2 className={styles.container__title}>{title}</h2>
            <div className={styles.container__text}>
                {children}
            </div>
        </article>
    )
}