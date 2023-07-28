import styles from '../src/styles/producto.module.css';
import Image from 'next/image';
import IconDelete from '../public/iconEliminar.png';

const Producto = ({producto, actualizarCantidad, eliminarProducto}) => {

    const {descripcion, imagen, nombre, precio, cantidad} = producto;
  return (
    <section className={styles.contenedorProducto}>
        <Image src={imagen} width={100} height={80} alt={nombre}/>

        <div className={styles.info}>
            <div className={styles.imgDelete}>
                <Image onClick={e => eliminarProducto(producto.id)} src={IconDelete} width={20} height={30} alt='imagen delete'/>
            </div>
            <h2>{nombre}</h2>
            <div className={styles.contenidoCantidad}>
                <label htmlFor='cantidad'>Cantidad: </label>
                <select 
                    onChange={ e => actualizarCantidad({
                        id: producto.id,
                        cantidad: e.target.value
                    })}
                    id='cantidad'
                    value={cantidad}
                    className={styles.cantidad}
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <p className={styles.precio}>${precio}</p>
            <p>Subtotal: $<span>{Number(precio) * Number(cantidad)}</span></p>
        </div>
    </section>
  )
}

export default Producto
