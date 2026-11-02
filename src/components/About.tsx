import Image from 'next/image';
import styles from './About.module.css';

const highlights = [
  { icon: '🎨', label: 'UI/UX Design' },
  { icon: '💻', label: 'Web Developer' },
  { icon: '📱', label: 'Flutter' },
  { icon: '☕', label: 'Java & MVC' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Visual */}
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/photo.jpg"
                  alt="Fikri Adiyofa"
                  fill
                  className={styles.avatarPhoto}
                  style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                />
              </div>
              <div className={styles.imageRing} />

              {/* GPA badge */}
              <div className={styles.expBadge}>
                <span className={styles.expNum}>3.40</span>
                <span className={styles.expLabel}>GPA / 4.00</span>
              </div>
            </div>

            {/* Highlight tags */}
            <div className={styles.tags}>
              {highlights.map((h) => (
                <div key={h.label} className={styles.tag}>
                  <span>{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.content}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Web Developer &<br />
              UI/UX Designer
            </h2>
            <p className={styles.text}>
              Saya <strong>Fikri Adiyofa</strong> — mahasiswa semester 5 D3 Manajemen Informatika
              di <strong>Politeknik Negeri Padang</strong> yang mencari kesempatan berkarier sebagai
              Web Developer atau UI/UX Designer. Berpengalaman mengembangkan aplikasi web dengan
              PHP, Laravel, dan MySQL.
            </p>
            <p className={styles.text}>
              Terlibat dalam proyek sistem PPDB tingkat kota dan sistem manajemen untuk klien nyata,
              dengan peran perancangan antarmuka (UI/UX). Terbiasa memimpin dan berkoordinasi dalam
              tim melalui pengalaman organisasi dan kepanitiaan.
            </p>

            <div className={styles.detailGrid}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Nama</span>
                <span className={styles.detailValue}>Fikri Adiyofa</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Email</span>
                <span className={styles.detailValue}>ikimamer@gmail.com</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Lokasi</span>
                <span className={styles.detailValue}>Padang, West Sumatra, Indonesia</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Pendidikan</span>
                <span className={styles.detailValue}>D3 Manajemen Informatika</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Kampus</span>
                <span className={styles.detailValue}>Politeknik Negeri Padang</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Status</span>
                <span className={`${styles.detailValue} ${styles.available}`}>
                  <span className={styles.dot} /> Open to Work
                </span>
              </div>
            </div>

            <div className={styles.certRow}>
              <div className={styles.certItem}>
                <span className={styles.certIcon}>🏅</span>
                <span className={styles.certText}>HCIA-Cloud Computing V5.5 — Huawei ICT Academy, 2026</span>
              </div>
              <div className={styles.certItem}>
                <span className={styles.certIcon}>🏅</span>
                <span className={styles.certText}>HCIA-Cloud Service V3.5 — Huawei ICT Academy, 2026</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a href="/cv-fikri-adiyofa.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View CV
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
