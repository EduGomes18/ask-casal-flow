import React, {useCallback, useState} from 'react';
import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"
const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(()=>{
    setShow(!show);
  },[show])

  return (
    <>
    <div className={`d-flex-100 ${styles.container}`}>
      <div className={`d-flex-100 ${styles.headerInner}`}>
      <h1>LOGO</h1>

      <div className={`${styles.menuBox}`}>
        <div className={`${styles.notification}`}>
          <Image width="20" height="20" alt="Notificações" src={"/icons/bell.png"} />
        </div>

        <div onClick={handleShow}  className={styles.avatar}>
          <Image width="70" height="70" alt="Avatar" src={"/icons/avatar.png"} />
        </div>

        <div className={`${styles.menu} ${show ? `d-flex ${styles.show}` : "none"}`}>
            <Link href="/profile">
              <a>Perfil</a>
            </Link>
            
            <span>Sair</span>
          
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