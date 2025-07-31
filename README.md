# JokiPro - Web Joki Tugas & Skripsi

Aplikasi web untuk layanan joki tugas dan skripsi dengan fitur **Google Authentication** yang aman dan modern.

## 🚀 Fitur Utama

- **Google Authentication**: Login dan register menggunakan akun Google
- **Dashboard User**: Kelola pesanan dan pantau progress tugas
- **Katalog Layanan**: Berbagai jenis layanan joki (tugas kuliah, skripsi, programming, dll)
- **Sistem Pemesanan**: Form pemesanan yang lengkap dengan estimasi harga
- **UI/UX Modern**: Design responsive dengan Tailwind CSS
- **Real-time Updates**: Notifikasi status pesanan secara real-time

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS, Lucide React Icons
- **Backend**: Firebase Authentication (Google), Firestore Database
- **State Management**: React Context API

## 📦 Instalasi

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd joki-tugas-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi Firebase** (Sudah dikonfigurasi dengan project yang diberikan)
   
   Project Firebase sudah dikonfigurasi dengan:
   - **Project ID**: forum-uninu
   - **Authentication**: Google Sign-In
   - **Firestore Database**: Aktif
   - **Analytics**: Aktif

4. **Setup Google Authentication di Firebase Console**
   
   a. Buka [Firebase Console](https://console.firebase.google.com/project/forum-uninu)
   
   b. Pergi ke Authentication → Sign-in method
   
   c. Aktifkan **Google** provider
   
   d. Tambahkan domain yang diizinkan (localhost untuk development)

5. **Jalankan aplikasi**
   ```bash
   npm start
   ```

   Aplikasi akan berjalan di `http://localhost:3000`

## 🔧 Setup Firebase Authentication

### 1. Aktifkan Google Sign-In
- Buka Firebase Console → Authentication → Sign-in method
- Klik "Google" dan aktifkan
- Pilih support email untuk project
- Simpan perubahan

### 2. Konfigurasi Domain (untuk Production)
- Tambahkan domain website Anda di "Authorized domains"
- Untuk development, `localhost` sudah otomatis diizinkan

### 3. Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Orders collection
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📱 Struktur Aplikasi

```
src/
├── components/
│   ├── Home.js          # Halaman utama
│   ├── Login.js         # Halaman login Google
│   ├── Dashboard.js     # Dashboard user
│   ├── Services.js      # Halaman layanan
│   └── ProtectedRoute.js # Route protection
├── contexts/
│   └── AuthContext.js   # Context untuk Google authentication
├── firebase/
│   └── config.js        # Konfigurasi Firebase
├── App.js               # Main app component
├── App.css              # Tailwind imports & custom styles
├── index.js & index.css # Entry point & base styles
├── tailwind.config.js   # Konfigurasi Tailwind
├── package.json         # Dependencies
└── README.md            # Dokumentasi lengkap
```

## 🎨 Layanan yang Tersedia

1. **Tugas Kuliah** - Essay, makalah, laporan
2. **Skripsi & Thesis** - Penelitian akademik tingkat tinggi
3. **Programming** - Aplikasi web, mobile, desktop
4. **Presentasi** - PowerPoint, Prezi profesional
5. **Analisis Data** - SPSS, Excel, R, Python
6. **Desain Grafis** - Logo, poster, UI/UX

## 🔐 Fitur Google Authentication

- **Login dengan Google**: Satu klik untuk masuk menggunakan akun Google
- **Keamanan Tinggi**: Menggunakan OAuth 2.0 Google
- **No Password**: Tidak perlu mengingat password tambahan
- **Profile Integration**: Otomatis mengambil nama dan foto profil
- **Auto Registration**: Akun otomatis dibuat saat login pertama kali

## 📊 Dashboard Features

- **Google Profile**: Menampilkan foto dan nama dari akun Google
- **Statistics Cards**: Total pesanan, progress, pengeluaran
- **Order Management**: Tabel pesanan dengan status real-time
- **Quick Actions**: Tombol pesan tugas baru
- **Activity Feed**: Riwayat aktivitas terbaru

## 🎯 Cara Menggunakan

1. **Klik "Masuk dengan Google"**: Di halaman utama atau login
2. **Pilih Akun Google**: Pilih akun Google yang ingin digunakan
3. **Akses Dashboard**: Otomatis diarahkan ke dashboard setelah login
4. **Browse Services**: Lihat katalog layanan yang tersedia
5. **Place Order**: Pesan layanan dengan mengisi form detail
6. **Track Progress**: Pantau status pesanan di dashboard

## 🚀 Build untuk Production

```bash
# Build aplikasi
npm run build

# Deploy ke hosting (contoh: Netlify, Vercel)
# Upload folder 'build' ke hosting provider
```

**Catatan untuk Production:**
- Tambahkan domain production ke Firebase Console
- Update Authorized domains di Authentication settings
- Pastikan HTTPS aktif untuk Google Sign-In

## 📞 Kontak & Support

- **WhatsApp**: +62 812-3456-7890
- **Email**: info@jokipro.com
- **Telegram**: @jokipro

## 🔧 Troubleshooting

### Google Sign-In Error
- Pastikan domain sudah ditambahkan di Firebase Console
- Cek apakah Google provider sudah diaktifkan
- Untuk localhost, pastikan menggunakan `http://localhost:3000`

### Firebase Connection Error
- Verifikasi konfigurasi Firebase di `src/firebase/config.js`
- Pastikan project ID sesuai dengan yang di Firebase Console

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

**Note**: Aplikasi ini sudah dikonfigurasi dengan Firebase project "forum-uninu" dan siap digunakan untuk Google Authentication.