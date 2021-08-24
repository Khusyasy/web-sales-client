# CLIENT untuk web-sales
saya menggunakan `vue` versi `3` serta menggunakan template [sigma-vue](https://github.com/primefaces/sigma-vue) dari UI framework [primevue](https://www.primefaces.org/primevue/), karena saat ini primevue sudah support `vue 3` dan memiliki komponen yang dibutuhkan seperti [DataTable](https://www.primefaces.org/primevue/showcase/#/datatable) untuk menampilkan data dengan table yang sudah lengkap dengan berbagai fitur untuk sorting, pagination dll. dan juga [Chart](https://www.primefaces.org/primevue/showcase/#/chart) untuk menampilkan berbagai jenis Diagram.

dibandingkan dengan beberapa UI framework lainnya seperti, [Vuestic](https://vuestic.dev/en/ui-elements/avatar) yang komponennya masih sedikit. [Oruga UI](https://oruga.io/documentation/) yang masih dalam development untuk support `vue 3`.

untuk maps menggunakan library [leaflet](https://leafletjs.com/), agar bisa digunakan dengan `vue 3` saya memakai component [vue-leaflet](https://github.com/vue-leaflet/vue-leaflet).

## Setup
node version `v14.17.0`

### Instalasi package
```bash
npm install
```

### Menjalankan app vue
sebelumnya pastikan [server API](https://github.com/Khusyasy/web-sales-api) sudah berjalan.
app vue akan berjalan di port `8080` (`localhost:8080`)
```bash
npm run serve
```

### Login
data login dummy.
|     |     |
| --- | --- |
| email | `admin@admin.com` |
| password | `admin` |
