import Layout from "../../components/layout";
import Post from "../../components/post";


export default function Blog({posts}) {

  
  return (
    <Layout
        title={'blog'}
        description={'Area de blog para aprender'}
    >
        <main className="contenedor">
          <h1 className="heading">Blogs</h1>
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
        </main>
    </Layout>
  )
}



export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const {data : posts} = await respuesta.json();
  


  return {

    props:{
        posts
    }
  }
}