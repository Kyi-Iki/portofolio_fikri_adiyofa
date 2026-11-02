import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'UI/UX & Design',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Wireframing & Prototyping', level: 85 },
      { name: 'Adobe Photoshop / Illustrator', level: 72 },
    ],
  },
  {
    category: 'Frontend & Web',
    icon: '💻',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 82 },
      { name: 'Bootstrap 5', level: 85 },
      { name: 'PHP (Laravel / Lumen)', level: 80 },
    ],
  },
  {
    category: 'Backend & Mobile',
    icon: '⚙️',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'Java (MVC Architecture)', level: 75 },
      { name: 'Flutter & Dart', level: 70 },
      { name: 'REST API & .NET Framework', level: 68 },
    ],
  },
];

const techBadges = [
  'PHP', 'JavaScript', 'Dart', 'Java', 'C', 'C#',
  'HTML5', 'CSS3', 'Laravel', 'Lumen', 'Bootstrap 5',
  'Flutter', 'MySQL', 'REST API', 'MVC', 'Figma',
  'Adobe XD', 'Adobe Photoshop', 'Canva', 'Git', 'GitHub',
  'Visual Studio', 'Huawei Cloud', 'Maps API',
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Kemampuan Teknis</h2>
          <p className="section-subtitle">
            Tools dan teknologi yang saya kuasai — dari desain antarmuka hingga pengembangan
            aplikasi web dan mobile.
          </p>
        </div>

        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.category} className={`card ${styles.group}`}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{ '--level': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.certSection}>
          <div className={styles.certCard}>
            <div className={styles.certIcon}>🏅</div>
            <div>
              <div className={styles.certTitle}>HCIA-Cloud Computing V5.5</div>
              <div className={styles.certOrg}>Huawei ICT Academy • 2026</div>
            </div>
          </div>
          <div className={styles.certCard}>
            <div className={styles.certIcon}>🏅</div>
            <div>
              <div className={styles.certTitle}>HCIA-Cloud Service V3.5</div>
              <div className={styles.certOrg}>Huawei ICT Academy • 2026</div>
            </div>
          </div>
        </div>

        {/* Tech badge cloud */}
        <div className={styles.badgeSection}>
          <p className={styles.badgeLabel}>Semua teknologi yang digunakan:</p>
          <div className={styles.badgeCloud}>
            {techBadges.map((tech) => (
              <span key={tech} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
