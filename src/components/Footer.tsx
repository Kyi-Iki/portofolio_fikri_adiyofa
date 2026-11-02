'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            <span className={styles.logoAccent}>F</span>ikri.
          </a>
          <p className={styles.tagline}>Designing & building with purpose.</p>
        </div>

        <div className={styles.links}>
          {['home', 'about', 'skills', 'portfolio', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className={styles.link}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        <p className={styles.copy}>
          © {year} Fikri Adiyofa. Built with Next.js & 💙
        </p>
      </div>
    </footer>
  );
}
