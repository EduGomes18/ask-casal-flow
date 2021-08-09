import React from 'react';

import styles from './form.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
  

const Button: React.FC<ButtonProps> = ({title}) => {
  return <button className={styles.btnCont}>{title}</button>;
}

export default Button;