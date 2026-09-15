---
repo: "entur/tavla"
name: "tavla"
description: "🖥 A customizable departure board for all public transport in Norway"
readmeQualityOk: true
url: "https://github.com/entur/tavla"
homepage: "https://tavla.entur.no"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["avgangstavle", "kollektivtransport", "entur"]
stars: 123
forks: 49
openIssues: 1
closedIssues: 89
watchers: 16
contributors: 67
recentReleases: 0
createdAt: "2018-06-28T10:49:02Z"
lastCommitAt: "2026-09-15T08:54:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 50
maintainers: ["dependabot[bot]", "gurogb", "maikenlie00"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4db3380d8b1956251e1cc693b4a40aab741e41f16e097a3373c6297bda8df67/entur/tavla"
discussionCount: 20
---

# Tavla

Med «Tavla» kan du sette opp egne, spesialtilpassede avgangstavler for all offentlig transport i Norge. Løsningen utvikles av Entur, og er helt gratis og tilgjengelig for alle. Logg inn på [tavla.entur.no](https://tavla.entur.no/) for å komme i gang! Abonner på oppdateringer til Tavla ved å klikke på “Watch” i menyen.

> **Merk:** Dette repoet er admin-/konfigurasjonsappen der man oppretter og redigerer tavler. Selve tavle-visningen (det som vises på skjermene) rendres i et eget repo: [entur/tavla-visning](https://github.com/entur/tavla-visning).
 

## Struktur i repoet
Dette repo består av tre tjenester: en backend i /backend, en frontend i /tavla og en liten redirect-tjeneste i /redirect. For lokal kjøring og oppsett, se i undermappene og deres egne readme-filer. 

```
/
├─ backend/            Rust (Axum) API + Redis
│  └─ helm/            Deploy-konfigurasjon for backend (Helm chart)
├─ tavla/              Next.js-frontend
│  ├─ migrations/      Python-migrasjonsskript for Firestore
│  └─ helm/            Deploy-konfigurasjon for frontend (Helm chart)
├─ redirect/           Liten Rust-tjeneste (redirect)
├─ docs/               Dokumentasjon (database, GraphQL-lenker)…
