---
repo: "jauhariel/kaminoa-api"
name: "kaminoa-api"
description: "Restapi sederhana "
readmeQualityOk: true
url: "https://github.com/jauhariel/kaminoa-api"
homepage: "https://api.kaminoa.eu.cc"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-07T22:26:31Z"
lastCommitAt: "2026-07-04T22:19:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["jauhariel"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ecb3ed807a022742bf31c167924a3eb60c507b2911068079020260bb313eb06/jauhariel/kaminoa-api"
---

# Kaminoa API

REST API collection dengan dokumentasi interaktif. Tambah endpoint baru cukup dengan membuat file baru di folder `fitur/` — server langsung mendeteksinya otomatis.

## Instalasi

```bash
npm install
npm start
```

Server berjalan di `http://localhost:47291`  
Dokumentasi di `http://localhost:47291/docs`

## Struktur Folder

```
kaminoa-api/
├── index.js          # Server utama (auto-discovery)
├── public/
│   └── docs.html     # UI dokumentasi interaktif
└── fitur/
    ├── ai/
    │   └── blackboxai.js
    ├── tools/
    │   └── shorturl.js
    └── (tambah folder/file baru sesuai kategori)
```

## Menambah Endpoint Baru

Buat file `.js` di dalam `fitur/` sesuai kategori, lalu export `default` dengan format berikut:

```js
// fitur/kategori/namafitur.js

export default {
  route: {
    method: "get",           // get | post | put | patch | delete
    path: "/kategori/nama",
    tags: ["Kategori"],      // nama grup di sidebar docs
    summary: "Deskripsi singkat",
    description: "Deskripsi panjang (opsional)",

    // Untuk GET — gunakan parameters
    parameters: [
      {
        name: "input",
        in: "query",         // query | path | header…
