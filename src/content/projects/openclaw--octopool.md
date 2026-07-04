---
repo: "openclaw/octopool"
name: "octopool"
description: "A shared, org-authenticated GitHub read relay and cache."
url: "https://github.com/openclaw/octopool"
homepage: "https://octopool.dev"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [67, 26]
topics: ["cache", "github", "shared"]
stars: 94
forks: 11
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 45
recentReleases: 10
createdAt: "2026-05-26T23:05:07Z"
lastCommitAt: "2026-07-04T19:19:14Z"
lastReleaseAt: "2026-06-13T06:32:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 41
maintainers: ["steipete", "vincentkoc", "RomneyDa"]
openGraphImageUrl: "https://opengraph.githubassets.com/61db4cbe0b1a5a94c9545d13bd66d0b00f4a86ddae260c706339d7ea9a30e40b/openclaw/octopool"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# octopool

**Pool your org's GitHub identities behind a shared Cloudflare cache.**

A self-hosted GitHub read relay. One Cloudflare Worker serves shared cache hits, uses token-free GitHub transports where possible, and routes the remaining reads through the healthiest pooled PAT or GitHub App installation.

[App](https://octopool.openclaw.ai) · [Docs](https://docs.octopool.dev) · [Relay API](https://docs.octopool.dev/relay.html) · [CLI](https://docs.octopool.dev/cli.html) · [Spec](https://docs.octopool.dev/spec.html)

</div>

---

## Why octopool

A maintainer team plus a few bots can chew through GitHub's primary rate limit fast. Every developer carries their own PAT, every GitHub App installation has its own budget, and they all run the same handful of read shapes (`gh pr view`, `gh pr checks`, `gh run list`, `gh issue list`, `gh api repos/.../pulls/N`) against the same repos, over and over.

Octopool moves that traffic off individual machines and onto Cloudflare:

- **One pool, one cache.** PATs and GitHub App private keys live as Cloudflare Worker secrets, not on laptops or in CI logs. A cache miss first tries an equivalent token-free GitHub transport, then a healthy pooled…
