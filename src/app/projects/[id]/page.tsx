import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProjectById, projects } from '@/data/projects';
import styles from './page.module.css';

// Allow blocking data access for dynamic params
export const instant = false;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Fikri Adiyofa`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <div className={styles.page}>
      {/* Back button */}
      <div className={styles.topBar}>
        <div className="container">
          <Link href="/#portfolio" className={styles.backBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Kembali ke Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div
        className={styles.hero}
        style={{ '--project-color': project.color } as React.CSSProperties}
      >
        <div className={styles.heroBg} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroCategory}>{project.category}</span>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroDesc}>{project.shortDesc}</p>

          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {project.year}
            </span>
            <span className={styles.heroBadge}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              {project.role}
            </span>
            <span className={`${styles.heroBadge} ${styles.typeBadge}`}>{project.type}</span>
          </div>
        </div>

        {/* Big emoji decoration */}
        <div className={styles.heroEmoji}>{project.emoji}</div>
      </div>

      {/* Main content */}
      <div className="container">
        <div className={styles.contentGrid}>
          {/* Left: main details */}
          <main className={styles.main}>
            {/* About */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Tentang Proyek</h2>
              {project.fullDesc.map((para, i) => (
                <p key={i} className={styles.paragraph}>{para}</p>
              ))}
            </section>

            {/* Highlights */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Yang Saya Kerjakan</h2>
              <ul className={styles.highlightList}>
                {project.highlights.map((h, i) => (
                  <li key={i} className={styles.highlightItem}>
                    <span className={styles.highlightDot} />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Technology Stack</h2>
              <div className={styles.techGrid}>
                {project.tech.map((t) => (
                  <div key={t} className={styles.techCard}>
                    <span className={styles.techName}>{t}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Repository Links */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Repository & Links</h2>
              <div className={styles.linkCards}>
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkCard}
                >
                  <div className={styles.linkCardIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className={styles.linkCardBody}>
                    <div className={styles.linkCardTitle}>GitHub Repository</div>
                    <div className={styles.linkCardUrl}>{project.github}</div>
                  </div>
                  <svg className={styles.linkCardArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                {/* Figma (if exists) */}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkCard} ${styles.linkCardFigma}`}
                  >
                    <div className={styles.linkCardIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
                        <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
                        <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
                        <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
                        <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
                      </svg>
                    </div>
                    <div className={styles.linkCardBody}>
                      <div className={styles.linkCardTitle}>Figma Prototype</div>
                      <div className={styles.linkCardUrl}>Interactive Design Prototype</div>
                    </div>
                    <svg className={styles.linkCardArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}

                {/* Live Demo (if exists) */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkCard} ${styles.linkCardLive}`}
                  >
                    <div className={styles.linkCardIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <div className={styles.linkCardBody}>
                      <div className={styles.linkCardTitle}>Live Demo</div>
                      <div className={styles.linkCardUrl}>{project.liveDemo}</div>
                    </div>
                    <svg className={styles.linkCardArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </section>
          </main>

          {/* Right: sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Info Proyek</h3>
              <div className={styles.sideItems}>
                <div className={styles.sideItem}>
                  <span className={styles.sideLabel}>Tahun</span>
                  <span className={styles.sideValue}>{project.year}</span>
                </div>
                <div className={styles.sideItem}>
                  <span className={styles.sideLabel}>Peran</span>
                  <span className={styles.sideValue}>{project.role}</span>
                </div>
                <div className={styles.sideItem}>
                  <span className={styles.sideLabel}>Jenis</span>
                  <span className={styles.sideValue}>{project.type}</span>
                </div>
                <div className={styles.sideItem}>
                  <span className={styles.sideLabel}>Kategori</span>
                  <span className={styles.sideValue}>{project.category}</span>
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary ${styles.githubBtn}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Buka Repository
              </a>
            </div>

            {/* Other projects */}
            <div className={styles.otherProjects}>
              <h3 className={styles.otherTitle}>Proyek Lainnya</h3>
              {projects
                .filter((p) => p.id !== project.id)
                .map((p) => (
                  <Link key={p.id} href={`/projects/${p.id}`} className={styles.otherCard}>
                    <span className={styles.otherEmoji}>{p.emoji}</span>
                    <div>
                      <div className={styles.otherName}>{p.title}</div>
                      <div className={styles.otherYear}>{p.year}</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', flexShrink: 0, color: 'var(--text-muted)' }}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
