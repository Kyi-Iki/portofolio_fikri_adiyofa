export type Project = {
  id: string;
  category: string;
  type: string; // 'group' | 'personal' | 'academic' | 'client'
  title: string;
  shortDesc: string;
  fullDesc: string[];
  year: string;
  role: string;
  tech: string[];
  github: string;
  figma?: string;
  liveDemo?: string;
  emoji: string;
  color: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'ppdb-smp-padang',
    category: 'UI/UX Design & Web Dev',
    type: 'Proyek Kelompok',
    title: 'Sistem PPDB SMP Se-Kota Padang',
    shortDesc:
      'Sistem penerimaan peserta didik baru (PPDB) SMP tingkat kota Padang dengan dashboard admin, seleksi sekolah, dan pemetaan lokasi.',
    fullDesc: [
      'Sistem PPDB ini dikembangkan untuk memudahkan proses penerimaan peserta didik baru di seluruh SMP se-Kota Padang. Platform ini menggantikan sistem manual yang sebelumnya membutuhkan antrian panjang dan proses verifikasi yang rumit.',
      'Dalam proyek ini, saya berperan sebagai UI/UX Designer yang merancang antarmuka dan alur pengguna secara menyeluruh — mulai dari halaman pendaftaran siswa, pemilihan sekolah dan jalur, hingga dashboard admin untuk verifikasi dan pelaporan.',
      'Desain difokuskan pada kemudahan penggunaan bagi calon siswa, orang tua, dan admin sekolah, dengan mempertimbangkan berbagai tingkat literasi digital pengguna.',
    ],
    year: '2025',
    role: 'UI/UX Designer',
    tech: ['PHP', 'MySQL', 'Chart.js', 'Leaflet.js', 'HTML', 'CSS', 'Figma'],
    github: 'https://github.com/Kyi-Iki/PPDB_SMP_PADANG',
    figma: 'https://www.figma.com/proto/kxrSVgnwgACavNPlUZ4kAT/Untitled?node-id=1-2',
    emoji: '🏫',
    color: '#4f8ef7',
    highlights: [
      'Merancang antarmuka dan alur pengguna untuk sistem PPDB tingkat kota',
      'Mendesain dashboard admin dengan visualisasi data menggunakan Chart.js',
      'Mengintegrasikan peta interaktif dengan Leaflet.js untuk pemetaan sekolah',
      'Menyusun tata letak dan konsistensi tampilan agar mudah digunakan semua kalangan',
      'Membuat Figma Interactive Prototype untuk presentasi kepada stakeholder',
    ],
  },
  {
    id: 'laundry-management',
    category: 'Web Development',
    type: 'PBL — Klien Nyata',
    title: 'Sistem Manajemen Laundry',
    shortDesc:
      'Aplikasi web manajemen laundry berbasis web untuk klien nyata, mencakup pencatatan order, status laundry, dan laporan keuangan.',
    fullDesc: [
      'Proyek ini merupakan bagian dari Program Berbasis Lahan (PBL) dimana tim kami bekerja langsung dengan klien nyata — pemilik usaha laundry lokal — untuk mengembangkan sistem manajemen yang menggantikan pencatatan manual.',
      'Saya terlibat aktif dalam diskusi kebutuhan bersama klien dan penerapannya menjadi fitur sistem. Proses ini mengajarkan saya cara berkomunikasi dengan non-teknis dan menerjemahkan kebutuhan bisnis ke dalam solusi teknis.',
      'Sistem mencakup fitur pencatatan order masuk, tracking status cucian, manajemen pelanggan, serta laporan harian dan bulanan untuk membantu pemilik usaha.',
    ],
    year: '2025 – 2026',
    role: 'Tim Pengembang',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    github: 'https://github.com/Kyi-Iki/laundry_D_Four_Sistem',
    emoji: '👕',
    color: '#38bdf8',
    highlights: [
      'Mengembangkan sistem web manajemen laundry untuk klien nyata',
      'Terlibat dalam diskusi kebutuhan langsung dengan klien',
      'Menerapkan fitur tracking status order secara real-time',
      'Membangun modul laporan harian dan bulanan untuk operasional bisnis',
      'Berkolaborasi dalam tim lintas peran selama siklus pengembangan penuh',
    ],
  },
  {
    id: 'depot-air-galon',
    category: 'Web Development',
    type: 'Proyek Pribadi',
    title: 'Sistem Depot Air Galon',
    shortDesc:
      'Aplikasi web manajemen depot air galon menggunakan Laravel dan MySQL, mencakup pengelolaan stok, pesanan, dan pelanggan.',
    fullDesc: [
      'Proyek mandiri ini lahir dari kebutuhan nyata yang saya temukan di lingkungan sekitar — banyak usaha depot air galon yang masih mengandalkan catatan manual untuk mengelola stok dan pesanan pelanggan.',
      'Saya membangun sistem ini secara end-to-end menggunakan Laravel sebagai framework backend dengan arsitektur MVC yang terstruktur, dan MySQL sebagai basis data.',
      'Fitur utama meliputi manajemen stok galon, pencatatan pesanan pelanggan, histori transaksi, dan laporan penjualan — semua dalam antarmuka yang sederhana dan mudah dioperasikan oleh pemilik usaha.',
    ],
    year: '2026',
    role: 'Web Developer',
    tech: ['Laravel', 'MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kyi-Iki/depot_air_galon',
    emoji: '💧',
    color: '#34d399',
    highlights: [
      'Membangun aplikasi web lengkap secara mandiri (end-to-end)',
      'Menggunakan Laravel dengan arsitektur MVC yang bersih dan terstruktur',
      'Mengelola manajemen stok galon dan pesanan pelanggan',
      'Mengimplementasikan sistem pelaporan transaksi dan penjualan',
      'Menerapkan best practices keamanan dan validasi data Laravel',
    ],
  },
  {
    id: 'buku-tamu-digital',
    category: 'Desktop App & UI/UX',
    type: 'Proyek Akademik',
    title: 'Buku Tamu Digital',
    shortDesc:
      'Aplikasi desktop berbasis Java dengan arsitektur MVC dan MySQL untuk pengelolaan buku tamu digital yang efisien dan mudah digunakan.',
    fullDesc: [
      'Proyek akademik ini dikembangkan untuk mempelajari penerapan arsitektur Model-View-Controller (MVC) dalam pengembangan aplikasi desktop berbasis Java.',
      'Saya berperan ganda sebagai Application Developer sekaligus UI/UX Designer, merancang antarmuka yang konsisten dan mudah digunakan sebagai acuan pengembangan, lalu mengimplementasikannya ke dalam kode Java.',
      'Aplikasi ini mencakup fitur pengelolaan data tamu secara lengkap (CRUD), pencatatan kunjungan dengan timestamp, serta laporan tamu yang dapat difilter berdasarkan tanggal dan keperluan.',
    ],
    year: '2025 – 2026',
    role: 'Application Developer & UI/UX Designer',
    tech: ['Java', 'MySQL', 'MVC', 'JDBC', 'Figma'],
    github: 'https://github.com/Kyi-Iki',
    emoji: '📋',
    color: '#a78bfa',
    highlights: [
      'Merancang dan mengembangkan aplikasi desktop menggunakan Java dan arsitektur MVC',
      'Mengimplementasikan pengelolaan data tamu (Create, Read, Update, Delete)',
      'Merancang antarmuka yang konsisten dan mudah digunakan sebagai design reference',
      'Menghubungkan aplikasi Java dengan basis data MySQL menggunakan JDBC',
      'Menerapkan validasi input dan penanganan error secara komprehensif',
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
