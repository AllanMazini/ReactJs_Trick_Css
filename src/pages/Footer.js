
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {

    const linkedin = 'https://www.linkedin.com/in/allan-mazini-35592b21/'
    const gitHub = 'https://github.com/allanmazini'

    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.item}>
                    <a href={linkedin} target='_blank' rel='noreferrer' ><FaLinkedin /></a>
                </li>
                <li className={styles.item}>
                    <a href={gitHub} target='_blank' rel="noreferrer" ><FaGithubSquare /></a>
                </li>
            </ul>
            <div>
                <p className={styles.copy_right}>
                    <span>Allan Mazini</span> &copy; 2022 | Site desenvolvido em React.Js
                </p>
            </div>

        </footer>
    )

}

export default Footer