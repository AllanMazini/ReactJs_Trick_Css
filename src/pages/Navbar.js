import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;