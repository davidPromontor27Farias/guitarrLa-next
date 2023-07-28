import Guitarra from '../../components/guitarra';
import Layout from '../../components/layout';





export  default  function Tienda({guitarras}) {



  return (
    <Layout
        title={"tienda"}
        description={'Seccion de venta de guitarras'}
    >
        <main>
          <h1 className="heading">Listado de Guitarras</h1>
            <div className="contenedor-targets">
              {
                guitarras.map( guitarra => (
                  <Guitarra
                    guitarra={guitarra.attributes}
                    key={guitarra.id}
                  />
                ))
              }


            </div>
          

         


        </main>

    </Layout>
  )
}


export async function getServerSideProps(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data: guitarras} = await respuesta.json();
 
  return{
    props:{
      guitarras
    }
  }
}