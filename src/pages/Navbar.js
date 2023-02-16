import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import avatar from '../assets/avatar.png'

function Navbar() {
    return (

        <nav className={styles.nav}>
            <img src={avatar} alt='Avatar' />

            <ul>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/about'>About</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar;