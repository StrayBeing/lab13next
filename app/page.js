import styles from './page.module.css';
import Link from 'next/link';
import ImageSlideshow from './/components/images/image-slideshow';
export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.slideshow}><ImageSlideshow /></div>
        <div className={styles.hero}>
          <h1>NextLevel Food for NextLevel Foodies!</h1>
          <p>Taste & share food from all over the world.</p>
          <div className={styles.cta}>
            <a href="/community">Join the Community</a>
            <a href="/meals">Explore Meals</a>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>How it works</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Why NextLevel Food?</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </main>
  );
}
