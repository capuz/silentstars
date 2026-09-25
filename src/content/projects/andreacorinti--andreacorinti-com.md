---
repo: "andreacorinti/andreacorinti.com"
name: "andreacorinti.com"
description: "Il blog e sito personale di Andrea Corinti (Xab), Italian Web World Citizen. Riflessioni su internet e fediverso, videogiochi, musica, cinema/serie TV, fumetti e varie xabologie, online dal 2013."
readmeQualityOk: true
url: "https://github.com/andreacorinti/andreacorinti.com"
homepage: "https://andreacorinti.com"
language: "Nunjucks"
languages: ["Nunjucks"]
languagePcts: [65]
topics: ["eleventy-website", "eleventy", "personal-website", "italian"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2018-12-10T23:22:07Z"
lastCommitAt: "2026-09-25T09:02:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 86
maintainers: ["andreacorinti", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/715c17f3c40c545031f04d0e03ff45a955e22945eaca31d32c9cd3d11dad3f02/andreacorinti/andreacorinti.com"
---

# andreacorinti.com

Il blog e sito personale di Andrea Corinti (**Xab**), *Italian Web World Citizen*. Riflessioni su internet e fediverso, videogiochi, musica, cinema/serie TV, fumetti e varie xabologie, online dal 2013.

Sito statico costruito con [Eleventy (11ty)](https://www.11ty.dev/), Sass e Nunjucks, distribuito su [Netlify](https://www.netlify.com/).

## Sviluppo

```bash
npm install       # installa le dipendenze
npm start         # dev server con live reload (Sass + Eleventy)
npm run build     # build di produzione (quella che gira su Netlify)
npm run lint      # lint dei file Sass (stylelint)
npm run lint:fix  # lint con autofix
npm run bump      # bump di versione, es. npm run bump patch
```

## Struttura

- `src/posts/` — i post del blog, organizzati per anno (`2013/`, `2014/`, ...). `src/posts/bozze/` contiene le bozze: non vengono mai pubblicate in produzione (vedi `src/posts/bozze/bozze.11tydata.js`)
- `src/pages/` — pagine statiche (about, resume, contatti, categorie...)
- `src/_includes/` — layout e componenti Nunjucks
- `src/sass/` — fogli di stile, un partial per componente
- `src/_generate/` — template che generano file speciali (`feed.xml`, `sitemap.xml`,…
