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
      category: "Categoria 01",
      likes: 8,
      questions: [
        {
          user:1,
          avatar: "/images/woman.png"
        }
      ]
    },
    {
      id:2,
      title:"SALA 02",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit metus, vestibulum vel quam at, faucibus mattis turpis. Vivamus laoreet viverra leo, et tempus magna iaculis sit amet.",
      category: "Categoria 02",
      likes: 8,
      questions: [
        {
          user:1,
          avatar: "/images/woman.png"
        }
      ]
    },
    {
      id:3,
      title:"SALA 03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit metus, vestibulum vel quam at, faucibus mattis turpis. Vivamus laoreet viverra leo, et tempus magna iaculis sit amet.",
      category: "Categoria 01",
      likes: 8,
      questions: [
        {
          user:1,
          avatar: "/images/woman.png"
        }
      ]
    },
  ]
  return (
    <Layout title="Dashboard - Ask Casal Flow" >

      <div className="d-flex-100 col bgGray">
       <Header />
       <Nav />
        <div className="box">

          {rooms.map((room)=>(
            <Box key={room.id} room={room} />
          ))}
      

        </div>
      </div>
    </Layout>
  )
}
