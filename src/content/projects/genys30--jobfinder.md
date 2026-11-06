---
repo: "Genys30/jobfinder"
name: "jobfinder"
description: "A live index of open roles in Israeli hi-tech. Filter by city, company, title, seniority, or industry - all in your browser."
readmeQualityOk: true
url: "https://github.com/Genys30/jobfinder"
homepage: "https://genys30.github.io/jobfinder/"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-19T07:06:45Z"
lastCommitAt: "2026-11-06T02:43:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 20
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8f61af0ed9cb32d2a2de808c2ddd88e2d5d45b1aee412b96dbbb725ca3464326/Genys30/jobfinder"
---

# JobFinder · Israeli Jobs

A live index of open roles in Israeli hi-tech, public sector, academia, and healthcare.  
Built by [Jenny Sotnik Talisman](https://www.linkedin.com/in/jennysotnik/).

🔗 **[genys30.github.io/jobfinder](https://genys30.github.io/jobfinder/)**

---

## What this repository is

The site, and the data the site reads. Nothing else.

Collection — ~70 scrapers, the runners, the classification and lifetime analysis —
moved to a private repository on 2026-07-24. This one is written only by that
pipeline's publish job, from a manifest, so what you see here is exactly what the
browser fetches: `index.html`, `js/`, and the data files below.

Everything published here before 2026-07-24 is still in this repository's history.
Removing it from the current tree does not unpublish it, and this README does not
pretend otherwise.

---

## How it works

A nightly pipeline scrapes ~90 sources — ATS boards (Comeet, Greenhouse, Lever,
Ashby, Workable, Breezy), hospitals, universities, banks and insurers, ministries
and municipalities — and writes one CSV per source per day. LinkedIn exports are
added by hand each morning.

The frontend has no backend and no database. It…
