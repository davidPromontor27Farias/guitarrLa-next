import Layout from "../../../components/layout"
import Image from 'next/image';


export default function Entrada({post}) {

  const {contenido, publishedAt, imagen, titulo} = post[0].attributes;

  return (
    <Layout
      title={titulo}
    >
      <main className="contenedor justificado">
        <h1 className="heading">{titulo}</h1>
        <p className="public">Publicado el <span>{publishedAt}</span></p>
        <Image  src={imagen.data[0].attributes.url} alt={titulo} width={500} height={400}/>

        <div className="contenido-blog">
          <p>{contenido}</p>
        </div>
      </main>
    </Layout>
  )
}



export async function getServerSideProps({query: {url}}){

  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
  const {data: post} = await respuesta.json();


  return {

    props: {
      post
    }
  }
}