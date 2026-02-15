# Vinnzz Premium Bio Link

Website Link Tree personal dengan desain **Premium Glassmorphism**, animasi halus, dan fitur kustomisasi tingkat lanjut. Dibuat khusus untuk profil profesional yang mengutamakan estetika modern dan performis tinggi.

## ✨ Fitur Utama

-   💎 **Premium Glassmorphism**: Efek kaca buram (frosted glass) yang dalam dengan tekstur noise "bergerigi" yang otentik.
-   🎨 **Brand-Colored Icons**: Ikon tombol menggunakan warna asli brand (WhatsApp, Instagram, dll) untuk pengenalan visual yang instan.
-   ✨ **Tagline Sophisticated Frost**: Desain tagline minimalis dengan efek kaca transparan yang elegan.
-   🔄 **Non-Rotating Profile Animation**: Border foto profil yang hidup dengan efek *gradient shift* dan *glow pulse* tanpa memutar foto.
-   📱 **Fully Responsive**: Teroptimasi sempurna untuk perangkat mobile, tablet, dan desktop.
-   🚀 **Ultra Lightweight**: Dibuat dengan HTML, CSS, dan JS vanilla untuk kecepatan akses maksimal.

## 🛠️ Teknologi yang Digunakan

-   **HTML5**: Struktur semantik.
-   **CSS3**: Advanced Glassmorphism, CSS Variables, dan Keyframe Animations.
-   **JavaScript (Vanilla)**: DOM Manipulation dan Dynamic Configuration.
-   **Font Awesome**: Ikon brand yang tajam.
-   **Google Fonts**: Font Inter untuk tipografi profesional.

## ⚙️ Cara Kustomisasi

Seluruh data utama dapat diubah melalui file `script.js` pada bagian `config`:

```javascript
const config = {
  profile: {
    name: "Vinnzz",
    username: "@itsV1nnzz",
    tagline: "Desainer • Editor • Kreator • Programer",
    imageUrl: "./photo.webp",
    tiktokUsername: "itsv1nnzz"
  },
  // Tambah atau ubah link di bawah
  links: { ... }
}
```

### Pengaturan Desain (style.css)
-   **Ketebalan Kaca**: Ubah `--glass-bg` di bagian `:root`.
-   **Ketebalan Garis**: Ubah `--stroke-width` di bagian `:root`.
-   **Tingkat Blur**: Cari bagian `.glass-panel` dan sesuaikan `backdrop-filter: blur(50px)`.

## 📄 Lisensi
Dibuat untuk kebutuhan personal dan komersial terbatas. Silakan modifikasi sesuai keinginan Anda!

---
*Didesain dengan ❤️ oleh Vinnzz*
