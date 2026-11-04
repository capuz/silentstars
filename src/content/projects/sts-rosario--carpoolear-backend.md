---
repo: "STS-Rosario/carpoolear_backend"
name: "carpoolear_backend"
description: "The open source Laravel backend for the argentinian carpooling application: Carpoolear"
readmeQualityOk: true
url: "https://github.com/STS-Rosario/carpoolear_backend"
homepage: "https://carpoolear.com.ar"
language: "HTML"
languages: ["HTML", "PHP"]
languagePcts: [39, 35]
topics: ["php", "laravel", "backend", "application", "carpooling"]
stars: 68
forks: 51
openIssues: 4
closedIssues: 20
watchers: 10
contributors: 19
recentReleases: 0
createdAt: "2016-12-10T16:11:39Z"
lastCommitAt: "2026-11-04T13:05:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 57
maintainers: ["GonzaloGM", "sant-maldonado"]
openGraphImageUrl: "https://opengraph.githubassets.com/b68de31fe868f807daf62ab1fa2a2fc7ef8c2130730d1111fab6fd011f074b3e/STS-Rosario/carpoolear_backend"
---

# Carpoolear backend

Carpoolear es una aplicación web argentina de carpooling que permite a los usuarios compartir viajes en automóvil con otras personas.

Es una customización ad-hoc para Argentina de la filosofía carpooling, la cual consiste en compartir nuestros viajes en auto con otras personas de forma cotidiana. El carpooling es una práctica popular en Estados Unidos y Europa, donde se realiza de manera organizada para lograr aumentar el número de viajes compartidos y que estos sean concretados con otras personas además de nuestros vecinos y amigos.

## Start coding

Clone repository (remember to make your own fork)
```bash
git clone https://github.com/STS-Rosario/carpoolear_backend.git
```

Install dependencies
```bash
cd carpoolear_backend
composer update
composer install
```
Install MySQL, run the MySQL server, create a database and then
configure the database access in the .env file
```bash
cp .env.example .env
```
Generate laravel key
```bash
php artisan key:generate
```

Generate JWT secret for API authentication. This writes `JWT_SECRET` to your `.env` file and prevents the `Secret not set` error.
```bash
php artisan jwt:secret
```

Give read/write access to the…
