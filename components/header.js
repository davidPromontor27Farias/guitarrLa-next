import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';
import styles from '.././src/styles/styles.module.css';
import carrito from '../public/carrito.png';

export default function Header() {


    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Image src={logo.src} alt="imagen logo" width={300} height={40} />

                <nav className='navegacion'>
                    <Link href='/'>Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/carrito">
                        <Image src={carrito} width={30} height={50} alt='carrito imagen'/>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
