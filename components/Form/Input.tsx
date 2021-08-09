import React from 'react';

import styles from './form.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    safe: boolean
 }

const Input: React.FC<InputProps> = ({safe,...rest}) => {
  return <input {...rest} type={safe ? "password" : "text"} className={styles.inputCont} />;
}

export default Input;