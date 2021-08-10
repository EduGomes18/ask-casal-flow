import React from 'react';
import styles from "./box.module.css"
import Link from "next/link"


interface BoxProps {
  room: {
    id:number,
    title: string,
    description: string,
    category: string,
    likes: number,
    questions:Array<Questions>
  }
 
}

interface Questions {
  user: number;
  avatar: string;
}

const Box: React.FC<BoxProps> = ({room}) => {
  return (
      <div className={`d-flex-100 ${styles.boxCont}`}>
        <h1>{room.title}</h1>
      </div>
  );
}

export default Box;