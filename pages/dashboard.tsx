import Layout from "components/Layout"
import Header from "components/Header"
import Nav from "components/Nav"
import Box from "components/Box"

export default function Dashboard() {

  const rooms = [
    {
      id:1,
      title:"SALA 01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit metus, vestibulum vel quam at, faucibus mattis turpis. Vivamus laoreet viverra leo, et tempus magna iaculis sit amet.",
      category: {
        id:2,
        title: "Second Category",
        color: "#e01111"
      },
      likes: 8,
      questions: [
        {
          user:1,
          avatar: "/icons/man.png",
          name: "Man"
        }
      ]
    },
    {
      id:2,
      title:"SALA 02",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit metus, vestibulum vel quam at, faucibus mattis turpis. Vivamus laoreet viverra leo, et tempus magna iaculis sit amet.",
      category: {
        id:1,
        title: "First Category",
        color: "#A16AE8"
      },
      likes: 8,
      questions: [
        {
          user:1,
          avatar: "/icons/woman-02.png",
          name: "Woman"
        },
         {
          user:2,
          avatar: "/icons/woman-01.png",
          name: "Antthonella Fernandes"
        },
         {
          user:3,
          avatar: "/icons/man.png",
          name: "Man"
        },
      ]
    },
    {
      id:3,
      title:"SALA 03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit metus, vestibulum vel quam at, faucibus mattis turpis. Vivamus laoreet viverra leo, et tempus magna iaculis sit amet.",
      category: {
        id:3,
        title: "Third Category",
        color: "#467dea"
      },
      likes: 8,
      questions: [
        {
          user:1,
          avatar: "/icons/woman-01.png",
          name: "Woman 2"
        },
        {
          user:2,
          avatar: "/icons/woman-01.png",
          name: "Antthonella Fernandes"
        },
         {
          user:3,
          avatar: "/icons/man.png",
          name: "Man"
        },
         {
          user:4,
          avatar: "/icons/man.png",
          name: "Man"
        },
      ]
    },
  ]
  return (
    <Layout title="Dashboard - Ask Casal Flow" >

      <div className="d-flex-100 col bgGray">
       <Header />
       <Nav />
       <div className="containerGeral">
        <div className="box">

          {rooms.map((room)=>(
            <Box key={room.id} room={room} />
          ))}


          </div>

       </div>
       
      </div>
    </Layout>
  )
}
