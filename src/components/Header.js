/**
 * Created by bagjeongtae on 2017. 8. 1..
 */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                  <ul className={styles.container}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/router1'>router1</Link></li>
                    <li><Link to='/router2'>router2</Link></li>
                    <li><Link to='/router3'>router3</Link></li>
                  </ul>
                </nav>
            </header>
        )
    }
}

export default Header;