import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Project Nyata</h2>
          <p className="section-subtitle">
            Proyek-proyek yang telah saya kerjakan — dari desain UI/UX, pengembangan web,
            hingga aplikasi desktop berbasis Java.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`card ${styles.card}`}
              aria-label={`Lihat detail proyek: ${project.title}`}
            >
              {/* Thumbnail */}
              <div
                className={styles.thumbnail}
                style={{ '--card-color': project.color } as React.CSSProperties}
              >
                <span className={styles.emoji}>{project.emoji}</span>
                <div className={styles.thumbnailGlow} />
                <span className={styles.typeBadge}>{project.type}</span>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.shortDesc}</p>

                <div className={styles.tags}>
                  {project.tech.slice(0, 4).map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className={styles.tagMore}>+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.year}>{project.year}</span>
                  <span className={styles.viewLink}>
                    Lihat Detail
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
