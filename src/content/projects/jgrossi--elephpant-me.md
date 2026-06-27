---
repo: "jgrossi/elephpant.me"
name: "elephpant.me"
description: "🐘 a simple website to help you to trade elePHPants 💥"
url: "https://github.com/jgrossi/elephpant.me"
homepage: "https://elephpant.me"
language: "PHP"
languages: ["PHP", "Blade"]
languagePcts: [74, 26]
topics: ["hacktoberfest"]
stars: 68
forks: 35
openIssues: 15
closedIssues: 45
watchers: 8
contributors: 31
recentReleases: 0
createdAt: "2019-10-03T11:24:46Z"
lastCommitAt: "2026-06-27T00:37:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 54
maintainers: ["teiling88", "JonPurvis", "kasperhartwich"]
openGraphImageUrl: "https://opengraph.githubassets.com/40de5c45483c79659f731c7e62a85ae7759c6335eeac6b0a6a2944bb465bfb15/jgrossi/elephpant.me"
---

## ElePHPant.me

> Here is the right place for your elePHPants!

### About
- You can add your herd
- See ranking
    - global / per country
- Find people to trade
- See statistics about elephpants

### Stack

#### Frontend
- HTML5, CSS3, Bootstrap 5
- Vite, Livewire 3, Flux UI
- JavaScript, jQuery (popovers)

#### Backend
- PHP 8.5
- Laravel 10
- Livewire 4, FakerPHP
- Composer, PHPUnit

#### Database
- MySQL 8.0^

---

### Installation

### Using ddev

Clone this repo.

```bash
ddev start
ddev project-setup
```

Access the site on https://elephpantme.ddev.site

#### Prerequisite
- config file `.env`
- create local database  

#### Database

```bash
$ php artisan migrate
$ php artisan db:seed # only for generating fake data locally
```

#### Backend

```bash
$ composer install
$ php artisan key:generate
$ php artisan elephpants:read
$ php artisan storage:link
```

#### Frontend (Vite)

```bash
$ npm install
$ npm run build   # or npm run dev
```

---

### Maintainers
Junior Grossi – [@junior_grossi](https://x.com/junior_grossi)  
Igor Santos – [@IgorSantoos17](https://x.com/IgorSantoos17)
Jon Purvis - [@jonpurvis_](https://x.com/jonpurvis_)
Thomas Eiling -…
