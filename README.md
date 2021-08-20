# CLIENT untuk web-sales
saya menggunakan `vue` versi `3` serta menggunakan template [sigma-vue](https://github.com/primefaces/sigma-vue) dari UI framework [primevue](https://www.primefaces.org/primevue/), karena saat ini primevue sudah support `vue 3` dan memiliki komponen yang dibutuhkan seperti [DataTable](https://www.primefaces.org/primevue/showcase/#/datatable) untuk menampilkan data dengan table yang sudah lengkap dengan berbagai fitur untuk sorting, pagination dll. dan juga [Chart](https://www.primefaces.org/primevue/showcase/#/chart) untuk menampilkan berbagai jenis Diagram.

dibandingkan dengan beberapa UI framework lainnya seperti, [Vuestic](https://vuestic.dev/en/ui-elements/avatar) yang komponennya masih sedikit. [Oruga UI](https://oruga.io/documentation/) yang masih dalam development untuk support `vue 3`.


## Setup

`npm install` untuk menginstall.

pastikan [API](https://github.com/Khusyasy/web-sales-api) sudah dijalankan. (di `localhost:3000` karena vue mode development di setting proxy ke `localhost:3000`)

`npm run serve` untuk menjalankan vue mode development di `localhost:8080`.