import Link from 'next/link';
import styles from '../src/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <nav className='navegacion contenedor'>
            <Link href='/'>Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
        </nav>

        <p className={styles.legend}>Todos los derechos reservados {new Date().getFullYear()}</p>
    </footer>
  )
}
