import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/">
                <h1>Awesome Store</h1>
            </Link>
        </header>
    )
}

export default Header
