---
repo: "etalab/data_pass"
name: "data_pass"
description: "DataPass "
readmeQualityOk: true
url: "https://github.com/etalab/data_pass"
homepage: "https://datapass.api.gouv.fr"
language: "Ruby"
languages: ["Ruby", "CSS"]
languagePcts: [50, 26]
stars: 5
forks: 8
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2023-11-30T11:30:20Z"
lastCommitAt: "2026-09-21T09:15:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 94
maintainers: ["Isalafont", "jbfeldis", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59879a638e1358abb72ddab3c750bbbc5dadd042e8cf9286889eb244e33f06f7/etalab/data_pass"
---

# DataPass

L'outil de gestion des habilitations juridiques pour les données à accès restreint.

Version en ligne:
[https://sandbox.v2.datapass.api.gouv.fr/](https://sandbox.v2.datapass.api.gouv.fr/)

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
