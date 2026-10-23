---
repo: "neoisback431/Sesame"
name: "Sesame"
description: "sso proxy"
readmeQualityOk: true
url: "https://github.com/neoisback431/Sesame"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [48, 44]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-09-27T08:32:02Z"
lastCommitAt: "2026-10-23T08:47:06Z"
lastReleaseAt: "2026-10-22T08:57:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["claude", "neoisback431"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f1fcaafd8a55f55a7319059c0c57502db7963f848cadebad37f22ca37d48596/neoisback431/Sesame"
---

Vos utilisateurs se connectent **une seule fois** avec le compte de votre organisation
(Entra ID, Keycloak, Okta… en OIDC ou SAML). Sesame se connecte ensuite **à leur place**
aux applications internes qui n'ont qu'un formulaire de login, avec des identifiants
qu'ils ne voient jamais. **Aucun mot de passe applicatif n'atteint le navigateur**, et
chaque accès est tracé.

Aucune modification des applications, aucune extension de navigateur.

## Comment ça marche

```mermaid
flowchart LR
    U([Utilisateur]) -->|1. SSO| P[Portail Sesame]
    P <-->|OIDC / SAML| I[(Votre fournisseur<br/>d'identité)]
    U -->|2. clic sur une appli| X[Proxy Sesame]
    X -->|3. lit l'identifiant| S[(Coffre chiffré)]
    X -->|4. se connecte à sa place| A[Application interne]
```

1. L'utilisateur ouvre le portail et se connecte avec son compte habituel : il voit la liste de ses applications.
2. Chaque application est servie par Sesame à sa propre adresse (`compta.sesame.example.com`).
3. Au premier accès, le proxy lit l'identifiant de cet utilisateur pour cette appli dans le coffre chiffré…
4. …rejoue le formulaire de connexion côté serveur, garde la session et relaie les pages. Si la session expire,…
