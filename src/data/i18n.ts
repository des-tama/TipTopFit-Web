// Teks situs dalam dua bahasa. Inggris = halaman utama (/), Indonesia = /id/.
export type Lang = 'en' | 'id';

export const langs: Lang[] = ['en', 'id'];

/** Alamat halaman yang sama dalam bahasa lain. path tanpa awalan bahasa, mis. '/privacy/'. */
export function localePath(lang: Lang, path: string): string {
  return lang === 'en' ? path : `/id${path}`;
}

export const t = {
  en: {
    htmlLang: 'en',
    locale: 'en_US',
    nav: { home: 'Home', features: 'Features', faq: 'FAQ', privacy: 'Privacy', language: 'Bahasa Indonesia' },
    home: {
      title: 'TipTop Fit – Fast Math Puzzle Game for Android',
      description:
        'Free math puzzle game: tap falling cargo to hit the exact target and launch the rocket. Train mental math, percentages, Roman numerals and more.',
      kicker: 'Math puzzle game',
      h1: 'Launch rockets with quick mental math',
      lead:
        'Cargo crates fall from the sky. Tap the right ones so the container adds up to exactly the number on the rocket screen. Hit the target and the rocket lifts off. Miss, and you lose a life.',
      ctaLive: 'Get it on Google Play',
      ctaSoon: 'Coming soon to Google Play',
      ctaApple: 'Download on the App Store',
      free: 'Free to play · No account needed to start · Works offline',
      howTitle: 'How to play',
      how: [
        { h: 'Read the target', p: 'The rocket monitor shows a sum, a sequence, a conversion or a statement to judge.' },
        { h: 'Tap the cargo', p: 'Pick falling crates so the container adds up to exactly the answer. No more, no less.' },
        { h: 'Lift off', p: 'An exact fit launches the rocket and scores a point. Questions get harder as you climb.' },
      ],
      modesTitle: 'Game modes',
      modes: [
        { h: 'Survival', p: 'Endless levels that keep getting harder. How far can you go with three lives?' },
        { h: 'Easy · Medium · Hard', p: 'Practise at a fixed difficulty, each with its own high score.' },
        { h: 'Time Attack', p: '90 seconds at top difficulty. Your best score goes on the world ranking.' },
        { h: 'Party', p: 'Create a room, share the code or QR, and everyone races through the same questions.' },
      ],
      topicsTitle: 'What you will practise',
      topics: [
        'Addition, subtraction, multiplication and division',
        'Order of operations and brackets',
        'Squares, square roots and powers',
        'Percentages',
        'Roman numerals',
        'Number and letter sequences',
        'Time and clock arithmetic',
        'Inequalities',
        'True or false equations',
        'Alphabet position puzzles (A = 1 … Z = 26)',
        'Length and weight conversions (km to mm, kg to mg)',
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is TipTop Fit free?',
          a: 'Yes. The game is free to download and play. It shows ads between games, and you can choose to watch a video to get an extra life or skip a hard question.',
        },
        {
          q: 'Does it work offline?',
          a: 'Yes. Survival, Easy, Medium, Hard and Time Attack all work without internet. The world ranking and Party rooms need a connection.',
        },
        {
          q: 'Who is it for?',
          a: 'TipTop Fit is made for teens and adults (13+) who want quick, fun brain training. Difficulty grows as you play, so beginners and strong math players both get a challenge.',
        },
        {
          q: 'How does Party mode work?',
          a: 'One player creates a room and shares its code or QR code. Everyone who joins gets exactly the same questions in the same order, and the room shows the final ranking when time runs out.',
        },
        {
          q: 'How can I delete my data?',
          a: 'You can ask us to delete your player profile, scores and Party history at any time. See the Delete account page for the steps.',
        },
      ],
      finalTitle: 'Ready for lift-off?',
    },
    privacy: { title: 'Privacy Policy', description: 'How TipTop Fit collects, uses and protects your data.' },
    terms: { title: 'Terms of Use', description: 'The rules for using the TipTop Fit game and its online features.' },
    del: { title: 'Delete your account and data', description: 'How to ask TipTop Fit to delete your player profile, scores and related data.' },
    footer: { rights: 'All rights reserved.', terms: 'Terms', del: 'Delete account', contact: 'Contact' },
    notFound: { title: 'Page not found', p: 'This page drifted off into space.', back: 'Back to home' },
    updated: 'Last updated',
  },
  id: {
    htmlLang: 'id',
    locale: 'id_ID',
    nav: { home: 'Beranda', features: 'Fitur', faq: 'FAQ', privacy: 'Privasi', language: 'English' },
    home: {
      title: 'TipTop Fit – Game Puzzle Matematika Seru untuk Android',
      description:
        'Game puzzle matematika gratis: ketuk kargo sampai pas dengan target lalu luncurkan roket. Latih hitung cepat, persen, angka Romawi, dan lainnya.',
      kicker: 'Game puzzle matematika',
      h1: 'Luncurkan roket dengan hitungan cepat',
      lead:
        'Kargo berjatuhan dari langit. Ketuk yang tepat supaya isi kontainer pas sama dengan angka di layar roket. Kalau pas, roket meluncur. Kalau meleset, nyawa berkurang.',
      ctaLive: 'Unduh di Google Play',
      ctaSoon: 'Segera hadir di Google Play',
      ctaApple: 'Unduh di App Store',
      free: 'Gratis · Langsung main tanpa akun · Bisa offline',
      howTitle: 'Cara bermain',
      how: [
        { h: 'Baca targetnya', p: 'Layar roket menampilkan soal hitungan, deret, konversi satuan, atau pernyataan benar/salah.' },
        { h: 'Ketuk kargo', p: 'Pilih kargo yang jatuh sampai isi kontainer pas dengan jawabannya. Tidak kurang, tidak lebih.' },
        { h: 'Meluncur!', p: 'Jawaban pas meluncurkan roket dan menambah skor. Soal makin sulit seiring naiknya level.' },
      ],
      modesTitle: 'Mode permainan',
      modes: [
        { h: 'Survival', p: 'Level tanpa akhir yang terus makin sulit. Seberapa jauh kamu bisa bertahan dengan tiga nyawa?' },
        { h: 'Easy · Medium · Hard', p: 'Latihan di tingkat kesulitan tetap, masing-masing dengan rekor sendiri.' },
        { h: 'Time Attack', p: '90 detik di tingkat tersulit. Skor terbaikmu masuk peringkat dunia.' },
        { h: 'Party', p: 'Buat room, bagikan kode atau QR, lalu semua pemain berlomba di soal yang sama.' },
      ],
      topicsTitle: 'Yang kamu latih',
      topics: [
        'Penjumlahan, pengurangan, perkalian, dan pembagian',
        'Urutan operasi dan tanda kurung',
        'Kuadrat, akar, dan pangkat',
        'Persentase',
        'Angka Romawi',
        'Deret angka dan huruf',
        'Hitungan waktu dan jam',
        'Pertidaksamaan',
        'Soal benar atau salah',
        'Teka-teki posisi alfabet (A = 1 … Z = 26)',
        'Konversi panjang dan berat (km sampai mm, kg sampai mg)',
      ],
      faqTitle: 'Pertanyaan yang sering diajukan',
      faq: [
        {
          q: 'Apakah TipTop Fit gratis?',
          a: 'Ya. Game ini gratis diunduh dan dimainkan. Ada iklan di sela permainan, dan kamu bisa memilih menonton video untuk mendapat nyawa tambahan atau melewati soal yang sulit.',
        },
        {
          q: 'Apakah bisa dimainkan offline?',
          a: 'Bisa. Mode Survival, Easy, Medium, Hard, dan Time Attack berjalan tanpa internet. Peringkat dunia dan room Party membutuhkan koneksi.',
        },
        {
          q: 'Untuk siapa game ini?',
          a: 'TipTop Fit dibuat untuk remaja dan dewasa (13 tahun ke atas) yang ingin latihan otak yang cepat dan seru. Tingkat kesulitan naik seiring permainan, jadi pemula maupun yang jago matematika sama-sama tertantang.',
        },
        {
          q: 'Bagaimana cara kerja mode Party?',
          a: 'Satu pemain membuat room lalu membagikan kode atau QR-nya. Semua yang bergabung mendapat soal yang sama persis dengan urutan yang sama, dan room menampilkan peringkat akhir saat waktunya habis.',
        },
        {
          q: 'Bagaimana cara menghapus data saya?',
          a: 'Kamu bisa meminta kami menghapus profil pemain, skor, dan riwayat Party kapan saja. Langkahnya ada di halaman Hapus akun.',
        },
      ],
      finalTitle: 'Siap meluncur?',
    },
    privacy: { title: 'Kebijakan Privasi', description: 'Bagaimana TipTop Fit mengumpulkan, memakai, dan melindungi data kamu.' },
    terms: { title: 'Ketentuan Penggunaan', description: 'Aturan penggunaan game TipTop Fit dan fitur online-nya.' },
    del: { title: 'Hapus akun dan data', description: 'Cara meminta TipTop Fit menghapus profil pemain, skor, dan data terkait.' },
    footer: { rights: 'Hak cipta dilindungi.', terms: 'Ketentuan', del: 'Hapus akun', contact: 'Kontak' },
    notFound: { title: 'Halaman tidak ditemukan', p: 'Halaman ini melayang ke luar angkasa.', back: 'Kembali ke beranda' },
    updated: 'Terakhir diperbarui',
  },
} as const;
