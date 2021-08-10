import React from 'react';
import styles from "./nav.module.css"
import Link from "next/link"
const Nav: React.FC = () => {
  return (
      <div className="container">
        <div className={`d-flex-100 ${styles.navCont}`}>
            <div className={`boxRow`}>
            <Link href="/dashboard">
                <a className={`${styles.active}`}>Minhas salas</a>
            </Link>
            <Link href="/salas">
                <a>Outras salas</a>
            </Link>

            </div>
            
        </div>
      </div>
  );
}

export default Nav;