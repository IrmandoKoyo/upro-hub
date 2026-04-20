# UPRO Hub

Pusat proyek Unklab dalam satu halaman: bersih, cepat, dan mudah dikembangkan.

## Tentang

`UPRO Hub` adalah homepage portfolio untuk menampilkan beberapa proyek dalam satu domain utama.

Contoh penggunaan route:
- `upro.web.id` -> homepage utama
- `upro.web.id/yourporjects` -> proyek mata kuliah DavizClass (via rewrite/subpath)

## Teknologi

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
- Vercel

## Menjalankan Project

```bash
npm install
npm run dev
```

Project akan berjalan di local development server Vite.

## Build Production

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

1. Push repository ini ke GitHub.
2. Import project di Vercel.
3. Hubungkan domain `upro.web.id`.
4. Pastikan file `vercel.json` aktif untuk rewrite subpath.

## Struktur Singkat

```text
.
├─ public/
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
└─ vercel.json
```

## Catatan

- Semua copy dan tampilan ditulis dengan tone sederhana dan profesional.
- Fokus utama halaman ini adalah menjadi hub untuk banyak proyek, bukan landing promosi berlebihan.
