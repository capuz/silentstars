---
repo: "codebyarne/huismus"
name: "huismus"
description: "Huismus makes your quotes, invoices and credit notes as PDFs and keeps track of your expenses. It's for Dutch freelancers under the KOR scheme, or charging VAT: then you choose 0, 9 or 21% per invoice line. Coming from Moneybird? Bring your whole export along."
readmeQualityOk: true
url: "https://github.com/codebyarne/huismus"
homepage: "https://https://mijnhuismus.nl"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["bookkeeping", "bookkeeping-platform", "accounting", "boekhouden", "invoicing", "moneybird", "netherlands", "zzp"]
stars: 5
forks: 0
openIssues: 71
closedIssues: 44
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-02T15:11:02Z"
lastCommitAt: "2026-11-22T11:28:47Z"
lastReleaseAt: "2026-11-18T22:47:54Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 87
undervaluedScore: 58
maintainers: ["claude", "codebyarne"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9cc83d973f6a56d37e12d46ac152f9e6dd4a5b37fd317e4917dd1bb3c6a00b8/codebyarne/huismus"
---

# Huismus

Huismus is boekhouding voor Nederlandse zzp'ers, met of zonder KOR. Je maakt
er offertes, facturen en creditnota's mee als pdf, en je legt je uitgaven vast
met het bonnetje erbij, ook vanuit een map die meesynchroniseert met je
telefoon. Reken je btw, dan zie je per kwartaal de bedragen voor je
btw-aangifte. Kom je van Moneybird, dan neem je al je jaren mee. Meer op
[mijnhuismus.nl](https://mijnhuismus.nl).

Huismus draait bij jou: als app op je Mac of Windows-pc, of in één
Docker-container op een Raspberry Pi, een NAS of een andere server. Je
administratie staat op dat apparaat, in een SQLite-database.

## Even proberen

Zo zie je Huismus het snelst, met 9 jaar verzonnen administratie:

```
uv sync
./scripts/demo-server.sh
```

Open http://127.0.0.1:8790 en log in met `demo` / `demo-wachtwoord-123`.
Alles staat in een tijdelijke map. Stop je de server (Ctrl-C), dan is die
weg. Je hebt Python 3.12 of nieuwer, uv en Pango nodig (zie
[Ontwikkelen](#ontwikkelen)).
