import Image from 'next/image';
import styles from '../src/styles/target.module.css';
import Link from 'next/link';

const Guitarra = ({guitarra}) => {

    const {descripcion, nombre, precio, url, imagen} = guitarra;



    return (
        <div className={styles.target}>
            <Image className={styles.imagenTarget} src={imagen.data[0].attributes.formats.medium.url} width={500} height={800} alt={nombre}/>
            
            <div className="info-target">
                <h1 className={styles.tituloTarget}>{nombre}</h1>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}MXN</p>
                <Link href={`/guitarras/${url}`} className={styles.buttonVer}>Ver</Link>
            </div>
        </div>
    )
}

export default Guitarra;
