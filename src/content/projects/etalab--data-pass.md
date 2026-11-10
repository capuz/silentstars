---
repo: "etalab/data_pass"
name: "data_pass"
description: "DataPass "
readmeQualityOk: true
url: "https://github.com/etalab/data_pass"
homepage: "https://datapass.api.gouv.fr"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [72]
stars: 5
forks: 8
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2023-11-30T11:30:20Z"
lastCommitAt: "2026-11-10T10:53:21Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 94
maintainers: ["Samuelfaure", "jbfeldis", "evaspae"]
openGraphImageUrl: "https://opengraph.githubassets.com/f10777a9f3a57ae68aa5a24ba1c4559d0ae16f92a6f9b7922b5b29c1af44b163/etalab/data_pass"
postedAt: "2026-09-21T09:22:04.623Z"
---

# DataPass

L'outil de gestion des habilitations juridiques pour les données à accès restreint.

Version en ligne:
[https://sandbox.datapass.api.gouv.fr/](https://sandbox.datapass.api.gouv.fr/)

Les comptes disponibles en simili-production (couple email/password sur
ProConnect) :

Via le fournisseur d'identité ProConnect (le choix de l'organisation s'effectue
en dehors de DataPass) :

- `user@yopmail.com` / `user@yopmail.com`: simple demandeur qui possède
  plusieurs habilitations sur
  la première organisation de liste (Commune de Clamart)
- `api-entreprise@yopmail.com` / `api-entreprise@yopmail.com`: instructeur pour
  API Entreprise, sans habilitation
- `datapass@yopmail.com` pour un compte admin / toute instruction

Via un fournisseur d'identité fictif, qui est configuré pour sélectionner /
ajouter des organisations :

- `whatever@fia1.fr` (pas de mot de passe) : simple demandeur qui possède 2
    demandes sur la DINUM (lien avec l'organisation non vérifiée). Cet usager
    est rattaché à la commune de Clamart et le lien avec l'organisation est
    vérifié. Cet usager peut se rattacher à une organisation.
- `whatever@fia2.fr` (pas de mot de passe) : simple demandeur sans…
