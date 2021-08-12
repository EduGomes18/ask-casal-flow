import React from 'react';
import styles from "./box.module.css"
import Link from "next/link"
import Image from "next/image"


interface BoxProps {
  room: {
    id:number,
    title: string,
    description: string,
    category: {
      id: number,
      title:string,
      color: string
    },
    likes: number,
    questions:Array<Questions>
  }
 
}

interface Questions {
  user: number;
  avatar: string;
  name: string;
}

const Box: React.FC<BoxProps> = ({room}) => {
  return (
      <article className={`d-flex-100 ${styles.boxCont}`}>
        <header className="d-flex-100">

          <div className={`d-flex ${styles.title}`}>
            <span style={{background:room?.category?.color}} className={`d-flex ${styles.ball}`}/>
            <h4>{room.title}</h4>
          </div>
          
          <h5 style={{color:room?.category?.color}}>
            {room?.category?.title}
          </h5>
        </header>

        <div className={`d-flex ${styles.description}`}>
              <p>{room.description}</p>

              <Image width="14" height="27" alt={room.title} src="/icons/seta.svg" />
        </div>  
        
        <footer className={styles.footer}>

          <div className={styles.avatars}>

            {room.questions.filter((q,ind) => ind + 1 <= 3).map((quests) => (
              <Link key={quests.user} href="">
                <a>
                  <div className={styles.avatar}>
                    <Image width="37" height="37" src={quests.avatar} alt={quests.name} />
                  </div>
                  
                  <span>{quests.name.split(" ")[0]}</span>
                </a>
            </Link>
            ))}

            {room.questions.length > 3 && <div className={styles.plus}>
              +
              </div>}
            
          </div>

          <div className={`d-flex ${styles.actions}`}>

          </div>


        </footer>


      </article>
  );
}

export default Box;