---
repo: "Temikus/lgtm"
name: "lgtm"
description: "Score pull requests with System One decision models"
readmeQualityOk: true
url: "https://github.com/Temikus/lgtm"
homepage: "https://getlgtm.dev"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 6
forks: 1
openIssues: 8
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-16T07:52:34Z"
lastCommitAt: "2026-11-26T23:33:56Z"
lastReleaseAt: "2026-10-18T07:49:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 52
maintainers: ["Temikus", "renovate[bot]", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/69b1ef2b8dda8f43f5754037a23b301dc9b254f777e9d49ba6c2b09992c4fda6/Temikus/lgtm"
---

# LGTM

Score pull requests with System One decision models.

LGTM asks a decision model such as TypeSafe's Jev (`typesafe/jev-1.13`) a set of typed questions about a PR: is the diff aligned with its description, scoped, free of malice and security mistakes, tested? Each answer is a 0–1 value. LGTM combines them into one verdict, **approve**, **deny**, or **needs-human**, which you can gate a merge on. A typical PR costs a fraction of a cent.

LGTM doesn't write review comments, approve PRs, or merge. It's a mistake detector, not a security boundary: run it alongside required human reviewers, never instead of them.

> **Status:** v0, early. See [design/PRD.md](https://github.com/Temikus/lgtm/blob/HEAD/design/PRD.md) and the [releases](https://github.com/Temikus/lgtm/releases).

## Set up

You need an [OpenRouter](https://openrouter.ai) API key. Create a dedicated key with a spend limit.

```sh
go install github.com/Temikus/lgtm/cmd/lgtm@latest
lgtm init                       # writes two workflows and .github/lgtm.toml
gh secret set OPENROUTER_API_KEY
```
