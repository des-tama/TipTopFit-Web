# playtiptopfit.com

Situs publik game **TipTop Fit**: halaman utama (Inggris `/` dan Indonesia `/id/`), kebijakan privasi, ketentuan,
halaman hapus akun, dan `app-ads.txt`. Dibangun dengan [Astro](https://astro.build) menjadi HTML statis (tanpa
JavaScript di browser), lalu diterbitkan otomatis ke GitHub Pages.

## Yang biasanya diubah

Semua ada di `src/data/site.ts`:

| Nilai | Kapan diubah |
|---|---|
| `contactEmail` | Sekarang: alamat email yang benar-benar Anda baca |
| `playStoreLive` | `true` setelah aplikasi tampil di Google Play (tombol berubah dari "Segera hadir" menjadi link) |
| `appStoreUrl` | Isi link App Store saat versi iOS terbit |
| `policyDate` | Setiap kali isi kebijakan privasi/ketentuan diubah |

Teks halaman utama (dua bahasa) ada di `src/data/i18n.ts`. Isi kebijakan privasi, ketentuan, dan hapus akun ada di
`src/components/`.

## Menjalankan di komputer

```
npm install
npm run dev        # http://localhost:4321
npm run build      # hasil di dist/
```

## Terbit otomatis

Push ke branch `main` → GitHub Actions (`.github/workflows/deploy.yml`) membangun dan menerbitkan ke GitHub Pages.

Pengaturan sekali saja:
1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Domain sudah ditulis di `public/CNAME`. Setelah DNS benar, centang **Enforce HTTPS** di halaman yang sama.
3. DNS `playtiptopfit.com`:

| Nama | Tipe | Nilai |
|---|---|---|
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `<username-github>.github.io` |

Record `api`, `grafana`, `portainer`, `traefik` (server backend) tetap seperti sebelumnya.

## SEO

* HTML statis yang cepat, `title`/`description` per halaman, canonical, `hreflang` en/id, Open Graph & Twitter card.
* Data terstruktur (JSON-LD): `MobileApplication`, `WebSite`, `FAQPage`.
* `sitemap-index.xml` dibuat otomatis saat build; `robots.txt` menunjuk ke sana.
* Daftarkan domain di [Google Search Console](https://search.google.com/search-console) (verifikasi lewat record TXT di
  DNS) lalu kirim `https://playtiptopfit.com/sitemap-index.xml`.

## app-ads.txt

`public/app-ads.txt` berisi ID penerbit AdMob (`pub-3146274539916354`). Isi kolom **Website** di Play Console dengan
`https://playtiptopfit.com` supaya AdMob bisa memverifikasinya.
