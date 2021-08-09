import Layout from "components/Layout"
import Form from "components/Form"

export default function Home() {
  return (
    <Layout title="Ask Casal Flow" >
      <div className="container maxHeight bgPurple">
        <div className="box">
          <div className="innerHome">

            <div className="titleBox">
              <h1>Ask <br /><span>Casal Flow</span></h1>
              <h2>Crie e disponibilize sua sala de perguntas.</h2>
            </div>


          <Form />

          </div>

       

        </div>
      </div>
    </Layout>
  )
}
