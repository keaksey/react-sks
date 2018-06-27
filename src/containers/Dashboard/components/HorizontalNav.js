import React from 'react'
import styles from './HNavBar.module.scss'

export default class HNavBar extends React.PureComponent<any> {
    
    render() {
        
        return (
            <div className={`${styles.Scroller +' '+ styles.BoxShadow}`}>
                <nav className={`container ${styles.NavUnderline}`}>
                    <a className={`${styles.NavLink} ${styles.Active}`} href="#">Dashboard</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">
                      Friends
                      <span className="badge badge-pill bg-light align-text-bottom">27</span>
                    </a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Explore</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Suggestions</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Link</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Link</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Link</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Link</a>
                    <a className={`${styles.NavLink} nav-link`} href="#">Link</a>
                </nav>
            </div>
        )
    }
}