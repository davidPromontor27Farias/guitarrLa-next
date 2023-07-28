import {useState} from 'react';
import Layout from "../../../components/layout";
import styles from '../../styles/singleGuitarr.module.css';
import Image from 'next/image';

export default function Producto({guitarra, agregarCarrito}) {

    const [cantidad, setCantidad] = useState(0);
    const [agregado, setAgregado] = useState('');
    const {nombre, descripcion, precio, imagen} = guitarra[0].attributes;

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(cantidad <= 0){
            alert('No es una cantidad validad');
            return;
        }

        const objetoProducto = {
            id: guitarra[0].id,
            nombre, 
            descripcion, 
            precio,
            imagen:imagen.data[0].attributes.url,
            cantidad
        }

        setAgregado('Producto agregado')
        setTimeout(() => {
            setAgregado('');
        }, 1500);
        agregarCarrito(objetoProducto);

        
        
    }

    return (

        <Layout
            title={nombre}
        >
            <div className={styles.singleContenedor}>
                <Image className={styles.imagenTarget} src={imagen.data[0].attributes.url} width={500} height={800} alt={nombre}/>
        
                <div className={styles.infoTarg}>
                    <h1 className={styles.tituloTarget}>{nombre}</h1>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}MXN</p>

                    <form className={styles.formularioSelect} onSubmit={handleSubmit}>
                        <label htmlFor="cantidad">Cantidad: </label>
                        <select 
                            onChange={e => setCantidad(Number(e.target.value))}
                            id='cantidad'
                        >
                            <option value='0'>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <input type='submit' value='Agregar'/>
                        {agregado != '' ? <p className={styles.mensaje}>{agregado}</p> : ''}
                    </form>

                   
                </div>
            </div>
        </Layout>
    )
}

//Generamos las paginas para cada url que tenemos en las paginas
export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const {data} = await respuesta.json();

    
    
    const paths = data.map( guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }));


    return{
        paths,
        fallback: false
    }
}


//Con ello capturamos la url que se ocupara para mostrar el producto que se selecciono
export async function getStaticProps({params:{url}}){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const {data: guitarra } = await respuesta.json();

    return{

        props:{
            guitarra
        }
    }
}