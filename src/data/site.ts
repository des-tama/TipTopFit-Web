// =====================================================================================================
// SEMUA NILAI YANG MUNGKIN ANDA UBAH ADA DI FILE INI.
// =====================================================================================================
export const site = {
  name: 'TipTop Fit',
  url: 'https://playtiptopfit.com',
  // Email kontak yang tampil di kebijakan privasi & halaman hapus akun. WAJIB diganti ke alamat yang benar-benar
  // Anda baca: Google Play memeriksa bahwa pengguna bisa menghubungi Anda.
  contactEmail: 'estawiraspace@gmail.com',
  androidPackage: 'com.estawira.tiptopfit',
  // false = tombol bertuliskan "Segera hadir". Ubah ke true setelah aplikasi lolos review dan tampil di Google Play.
  playStoreLive: false,
  // Kosongkan sampai aplikasi iOS tersedia di App Store; tombolnya otomatis muncul bila diisi.
  appStoreUrl: '',
  // Tanggal berlaku kebijakan privasi & ketentuan (ubah bila isinya diubah).
  policyDate: '2026-11-15',
};

export const playStoreUrl = `https://play.google.com/store/apps/details?id=${site.androidPackage}`;
