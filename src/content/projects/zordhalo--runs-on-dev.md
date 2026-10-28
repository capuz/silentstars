---
repo: "zordhalo/runs-on.dev"
name: "runs-on.dev"
description: "Grab your own cool 'runs-on.dev' subdomain to use for free forever."
readmeQualityOk: true
url: "https://github.com/zordhalo/runs-on.dev"
homepage: "https://runs-on.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["cloudflare", "dev", "developer", "dns", "domains", "foss", "free", "free-domain", "free-for-dev", "free-for-developers"]
stars: 500
forks: 147
openIssues: 40
closedIssues: 93
watchers: 0
contributors: 46
recentReleases: 0
createdAt: "2026-08-31T01:51:22Z"
lastCommitAt: "2026-10-28T09:57:44Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 26
maintainers: ["zordhalo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a1b58bed43c0b107f0242ff2c855eb9171637bd0d53d1c1672e90e243ff29fc/zordhalo/runs-on.dev"
---

Free subdomains for developers. Claim <code>yourname.runs-on.dev</code> in seconds,
  then point it wherever you like.

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

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
`vercel.app` or `github.io`, for the price of one domain, about $10 a
year, by giving away subdomains under it. This is a subdomain registry,
not a TLD. Every name you claim lives under `runs-on.dev`, which Advance
Labs registered and is responsible for. Saying…
