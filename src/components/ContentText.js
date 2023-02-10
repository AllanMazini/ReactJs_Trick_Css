import styles from '../App.module.css';


function ContentText({ title, text }) {
    return (
        <div>
            <section className={styles.image}></section>
            <section className={styles.text}>
                <h2>{title}</h2>
                <p>{text} </p>
            </section>
        </div>

    )
}

export default ContentText;