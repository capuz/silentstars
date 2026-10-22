---
repo: "navikt/modiapersonoversikt"
name: "modiapersonoversikt"
description: " Modiapersonoversikt er en intern arbeidsflate som gir veiledere og saksbehandlere oversikt over brukeres forhold til NAV."
readmeQualityOk: true
url: "https://github.com/navikt/modiapersonoversikt"
homepage: "https://navikt.github.io/modiapersonoversikt"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 7
forks: 3
openIssues: 0
closedIssues: 22
watchers: 54
contributors: 39
recentReleases: 0
createdAt: "2018-02-21T08:45:44Z"
lastCommitAt: "2026-10-22T08:52:05Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 99
undervaluedScore: 59
maintainers: ["sigrunnu", "dependabot[bot]", "martinsomm-nav"]
openGraphImageUrl: "https://opengraph.githubassets.com/01d9fc01d03eebc99df71d3db677296df7cf74d6bd5f947a4bb409b456e8e041/navikt/modiapersonoversikt"
---

# Modiapersonoversikt

Modiapersonoversikt er en intern arbeidsflate som gir veiledere og
saksbehandlere oversikt over brukeres forhold til Nav.

## Komme i gang

### Miljøvariabler

Endring av miljøvariabler for lokal utvikling skal gjøres i `.env.development`.

- `PORT` kommer fra vite og styrer hvilken port devserveren starter på. Default: 3000
- `VITE_MOCK_ENABLED` styrer hvorvidt fetch-mock skal være aktivert
- `VITE_HODE_URL` styrer hvor dekoratøren hentes fra

**NB** Det skal ikke være nødvendig med endringer i disse filene for å få startet appen.

### Starte appen lokalt

Dette er gunstig for å kunne kjøre ting i `/web` uten å måtte generere mengder
av tokens for kallene som skjer til `/proxy` og `/modiapersonoversikt-draft`.
Kun et `LOCAL_TOKEN` er nødvendig. Dette kan hentes fra
<https://azure-token-generator.intern.dev.nav.no/api/obo?aud=dev-gcp:personoversikt:modiapersonoversikt>.

#### Laste ned pakker fra @navikt 
Opprett GitHub-token og konfigurer SSO for å autorisere tokenet mot navikt (husk å legg til expiration date)
Set tokenet i pnpm config:
```console
pnpm config set //npm.pkg.github.com/:_authToken <gh_token> --location=user
```

Start appen

```console
pnpm…
