import styles from './PostModel.module.css';

export default function PostModel({children}) {
    return (
        <article className={styles.container}>
            <div className={styles.container__text}>
                {children}
            </div>
        </article>
    )
}