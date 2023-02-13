import styles from './Navbar.module.css'
import avatar from '../assets/avatar.png'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <img src={avatar} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;