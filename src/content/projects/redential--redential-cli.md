---
repo: "Redential/redential-cli"
name: "redential-cli"
description: "Turn private work into an NDA-safe credential that shows what you can build — and companies can trust more than a CV."
readmeQualityOk: true
url: "https://github.com/Redential/redential-cli"
homepage: "https://redential.com/cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cli", "credentials", "developer-tools", "git", "hiring", "nodejs", "privacy", "proof-of-work", "typescript"]
stars: 48
forks: 5
openIssues: 29
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 4
createdAt: "2026-07-08T15:18:02Z"
lastCommitAt: "2026-07-28T14:57:13Z"
lastReleaseAt: "2026-07-22T14:58:25Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["jpbelmo", "rudi193-cmd", "BharadwajKanneveti"]
openGraphImageUrl: "https://opengraph.githubassets.com/00e7e421d9e4f9a3cf49e106de1ca482fda8afe0ab6d50e720bfe70ebca6f0cf/Redential/redential-cli"
---

<h1 align="center">Redential CLI</h1>

<p><img src="docs/assets/icon-pixel.svg?v=2" alt="Redential logo" height="88"></p>

<p><img src="docs/assets/wordmark.svg?v=4" alt="REDENTIAL" height="44"></p>

<p><picture>
<source media="(prefers-color-scheme: dark)" srcset="docs/assets/tagline-dark.svg?v=2">
</picture></p>

**English** · [Español](https://github.com/Redential/redential-cli/blob/HEAD/docs/i18n/README.es.md) · [Português (BR)](https://github.com/Redential/redential-cli/blob/HEAD/docs/i18n/README.pt-BR.md) · [Français](https://github.com/Redential/redential-cli/blob/HEAD/docs/i18n/README.fr.md) · [Italiano](https://github.com/Redential/redential-cli/blob/HEAD/docs/i18n/README.it.md)

Your best work is probably under an NDA.

Turn private work into an NDA-safe developer credential. Your code never
leaves your machine.

[Website](https://redential.com) · [Trust model](#trust-model) · [FAQ](#faq) · [Docs](#docs)

</div>

## How it works

```bash
npx redential scan
```

No login, no config, no global install. `scan` runs entirely locally and
makes zero network calls.

Redential CLI analyzes git history and implementation patterns locally,
then produces a bounded metadata bundle…
