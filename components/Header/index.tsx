import React from 'react';
import styles from "./header.module.css"
import Image from "next/image"
const Header: React.FC = () => {
  return (
    <>
    <div className={`d-flex-100 ${styles.container}`}>
      <div className={`d-flex-100 ${styles.headerInner}`}>
      <h1>LOGO</h1>

      <div className={`${styles.menuBox}`}>
        <div className={`${styles.notification}`}>
          {/* <Image width="" alt="Notificações" src={"/icons/notification.png"} /> */}

        </div>
      </div>

      </div>
      

    </div>
    <div className={`d-flex-100 ${styles.tieCont}`}>
      <div className={`d-flex-100 ${styles.headerInner}`}>
        <div className={`d-flex col`}>
          <h2>E aí,</h2>
          <h3>User 123!</h3>
        </div>

      </div>
    </div>
    </>
  );
}

export default Header;