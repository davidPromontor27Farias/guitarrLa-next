import styles from '../src/styles/targetBlog.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Post = ({post}) => {
    const {titulo, contenido, url, imagen, publishedAt} = post;
    
    return (
        <div className={styles.targetBlog}>
            <Image src={imagen.data[0].attributes.formats.medium.url} alt={titulo} width={500} height={400}/>
            <div className={styles.contenedorBlog}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.contenido}>{contenido}</p>
                <Link className={styles.link} href={`/blogs/${url}`}>Ver Blog</Link>
            </div>
        
        </div>
    )
}

export default Post
