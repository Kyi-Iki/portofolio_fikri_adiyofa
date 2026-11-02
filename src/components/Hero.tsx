'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const roles = [
  'UI/UX Designer',
  'Web Developer',
  'Frontend Developer',
  'Creative Technologist',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className={styles.hero}>
      {/* Background glows */}
      <div className={`${styles.glow} ${styles.glowTop}`} />
      <div className={`${styles.glow} ${styles.glowRight}`} />

      {/* Grid pattern */}
      <div className={styles.gridPattern} />

      <div className={`container ${styles.inner}`}>
        {/* Left: Text Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for freelance work
          </div>

          <h1 className={styles.headline}>
            Hello, I&apos;m{' '}
            <span className={styles.nameHighlight}>Fikri Adiyofa</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleStatic}>A&nbsp;</span>
            <span className={styles.roleTyped}>
              {displayed}
              <span className={styles.cursor} />
            </span>
          </div>

          <p className={styles.description}>
            Mahasiswa D3 Manajemen Informatika yang passionate dalam merancang
            antarmuka yang indah dan membangun aplikasi web yang fungsional.
            Bridging the gap between design and code.
          </p>

          <div className={styles.actions}>
            <a href="#portfolio" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Let&apos;s Talk
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Projects Done</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3.40</span>
              <span className={styles.statLabel}>GPA / 4.00</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statLabel}>Sertifikasi</span>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoRing} />
          <div className={styles.photoFrame}>
            <Image
              src="/photo.jpg"
              alt="Fikri Adiyofa"
              fill
              className={styles.photo}
              priority
            />
          </div>
          {/* Status badge */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span>Open to Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
