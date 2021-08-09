import React from 'react';
import Head from "next/head"


interface Layout {
    title: string;
    children:React.ReactNode
  }
  

const Layout = ({ title,children }: Layout) => {

  return(
      <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      </>
  );
}

export default Layout;