import Curso from '../../components/curso';
import Guitarra from '../../components/guitarra';
import Layout from '../../components/layout';
import Post from '../../components/post';

export default function Home({guitarras, posts, curso}) {


  return (
    <>
      <Layout 
        title={'inicio'}
        description={'GuitarrLA, sitio de venta de computadoras'}
      >

        <main className="contenedor">
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
        <Curso
          curso={curso.attributes}
        />

        <section className="contenedor">
          <h1 className="heading">Listado de Blogs</h1>
            <div className='contenedor-blogs'>

              {
                posts.map(post  => (
                  <Post
                    post={post.attributes}
                    key={post.id}
                  />

                ))
              }
            </div>

        </section>
        
      </Layout>

    </>
  )
}



export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=3&populate=imagen`;
  const urlPost = `${process.env.API_URL}/posts?_limit=3&populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;


  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
    
  ]);

  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ]);

  


  return {

    props:{
      guitarras,
      posts,
      curso
    }
  }
}