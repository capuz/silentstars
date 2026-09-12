---
repo: "zordhalo/runs-on.dev"
name: "runs-on.dev"
description: "Grab your own cool'runs-on.dev' subdomain to use for free forever."
readmeQualityOk: true
url: "https://github.com/zordhalo/runs-on.dev"
homepage: "https://runs-on.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["cloudflare", "dev", "developer", "dns", "domains", "foss", "free", "free-domain", "free-for-dev", "free-for-developers"]
stars: 157
forks: 44
openIssues: 24
closedIssues: 18
watchers: 0
contributors: 21
recentReleases: 0
createdAt: "2026-08-31T01:51:22Z"
lastCommitAt: "2026-09-12T08:05:33Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 29
maintainers: ["zordhalo", "Hawkay002", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c62f1408ee753ea61319e9e06799d2aac8bd0db5e50313667b2a06c56887e44/zordhalo/runs-on.dev"
---

<picture>
      <source media="(prefers-color-scheme: light)" srcset="https://runs-on.dev/opengraph-image">
    </picture>
  </a>
</p>

<h1 align="center">runs-on.dev</h1>

  Free subdomains for developers. Claim <code>yourname.runs-on.dev</code> in seconds,
  then point it wherever you like.
</p>

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

</p>

---

Claiming a name writes one file to this repository. That file is the record. It is the only
thing that makes the name resolve, and you can read it without asking anyone.

```json
{
  "name": "yourname",
  "owner": { "github": "yourname" },
  "claimedAt": "2026-01-01T00:00:00.000Z",
  "records": {}
}
```

There is no hidden database. The registry is this directory, the history is the git log, and
the rules are in `lib/`.

## Why this exists

A real top-level domain means an ICANN application. The 2026 round's
evaluation fee alone is $227,000, before you've built or run a registry to
back it. That's not a plausible way to get a custom-looking address for a
side project.

`runs-on.dev` gets the same feeling: a distinctive ending instead of
`vercel.app` or `github.io`, for the price of one domain, about $10 a…
