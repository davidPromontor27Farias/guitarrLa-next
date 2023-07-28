
import Layout from '../../components/layout';
import Image from 'next/image';
import NosotrosImagen from '../../public/nosotros.jpg';


export default function Nosotros() {
  return (
    <Layout
      title={"nosotros"}
      description={'Seccion donde se informa acerca de nosotros'}
    >
      <main className='contenedor'>
          <h1 className='heading'>Nosotros</h1>

          <div className="nosotros-contenido">
              <Image src={NosotrosImagen} width={800} height={300} alt='imagen nosotros'/>
              <div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s
                  crambled it to make a type specimen book. It has survived not only 
                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It w
                  </p>
                  
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and s
                  crambled it to make a type specimen book. It has survived not only 
                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It w

                  </p>
              </div>
          </div>
      </main>

    </Layout>
  )
}
