---
repo: "sashyo/minidauth"
name: "minidauth"
description: "Mini decentralised auth. Gives an existing auth system a key nobody holds, with governance over who can decrypt."
readmeQualityOk: true
url: "https://github.com/sashyo/minidauth"
language: "Java"
languages: ["Java"]
languagePcts: [91]
stars: 29
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-08T13:23:05Z"
lastCommitAt: "2026-09-09T08:20:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 19
maintainers: ["sashyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/d07afda57f880c67be404624dc360fb64b1002562f315da4344b6d9ad109782b/sashyo/minidauth"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
  </picture>
</p>

</p>

Your app can already tell who someone is. What it cannot do is stop itself reading their data. The
database holds the rows, the app holds the key, and taking the machine takes both.

minidauth moves the key out. It exists only as shares spread across the [Tide](https://tide.org)
network, no single node can reconstruct it, and every decryption is authorised by a policy the
network enforces. Your login stays exactly where it is: Cognito, Better Auth, Keycloak, Auth.js,
whatever you already run.

> **A stolen copy of your database contains nothing readable, and no key to make it readable.**

The same key signs as well as encrypts, and signing is the busier half. Every sign-in token, every
policy, every role grant is an EdDSA signature produced jointly by a threshold of nodes. Nothing is
signed locally, which is why owning the server does not let you forge a role or mint a token the
network will accept.

```sh
cp MidgardJava-1.0-SNAPSHOT.jar vendor/
MC_ADMIN_TOKEN=$(openssl rand -hex 32) docker compose --profile public up
```

That is the install. Details in [quick…
