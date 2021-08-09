import React from 'react';
import styles from "./form.module.css"
import Input from "./Input";
import Button from "./Button";
import Link from "next/link"

const Form: React.FC = () => {
  return(
    <div className={styles.container}>
      <h3>Login</h3>
  
      <Input safe={false} placeholder="E-mail" />
      <Input safe={true} placeholder="Senha" />
      <Link href="/">
      <a>Esqueci a senha</a>
      </Link>
      <Button title="Entrar" />

      <span>Não tem uma conta? <small>cadastre-se</small></span>
    </div>
  );
}

export default Form;