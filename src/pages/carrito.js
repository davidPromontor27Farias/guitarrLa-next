import {useState, useEffect} from 'react';
import Layout from "../../components/layout";
import Producto from "../../components/producto";
import styles from '../styles/carrito.module.css';


const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0);
    

   useEffect( ()=> {

    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.precio * producto.cantidad), 0);
    setTotal(calculoTotal);
   }, [carrito]);

    return (
        <Layout
            title={'Carrito de compras'}
        >
            <main className="contenedor">
                <h1 className="heading">Carrito de Compras</h1>
                <div className={styles.contenedorGrid}>

                    <div className={styles.listadoProductos}>
                        <p className={styles.title}>Listado de Productos</p>

                        {carrito.length <=0 ? 'No hay productos por mostrar' : carrito.map( producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                                actualizarCantidad={actualizarCantidad}
                                eliminarProducto={eliminarProducto}
                            />
                        ))}

                    </div>

                    <aside className={styles.barraLateral}>
                        <p>Total a Pagar: $<span>{total}</span></p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito
