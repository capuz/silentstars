---
repo: "ReproducibiliTea-org/reproducibiliTea"
name: "reproducibiliTea"
description: "Website for the ReproducibiliTea Journal Club and Podcast"
readmeQualityOk: true
url: "https://github.com/ReproducibiliTea-org/reproducibiliTea"
homepage: "https://reproducibilitea.org/"
language: "HTML"
languages: ["HTML"]
languagePcts: [95]
topics: ["international", "journal-club", "reproducibility", "reproducible-research", "reproducible-science", "science", "open-research", "open-science"]
stars: 8
forks: 27
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2019-07-29T16:57:02Z"
lastCommitAt: "2026-10-13T10:57:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 91
maintainers: ["paumanduch", "github-actions[bot]", "mjaquiery"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/199493353/4b8fa880-b312-11e9-8f0e-eb218b759633"
---

# reproducibiliTea

Website for the ReproducibiliTea Journal Club and Podcast

## Runtime configuration

### Netlify functions (`src/`)

Edit tokens are stateless, HMAC-signed strings — no database. Configure:

- `EDIT_TOKEN_SECRET`: secret key used to sign and verify edit tokens. Rotating it invalidates all outstanding tokens.
- `ADMIN_EMAILS`: comma-separated list of addresses that receive new-JC review requests.
- `EMAIL_REPORT_TO`: the central ReproducibiliTea account, bcc'd on every approve/reject email and the sole recipient of ignore notifications.
- `GITHUB_API_USER`, `GITHUB_TOKEN`, `GITHUB_REPO_API` (and `GITHUB_REPO_API_SANDBOX` for local/sandbox testing): used to read/write `_journal-clubs/*.md` in this (public) repo.
- `GITHUB_TOKEN_PENDING`, `GITHUB_REPO_API_PENDING` (and `GITHUB_REPO_API_PENDING_SANDBOX`): a separate fine-grained PAT (Contents: Read and write, scoped to that repo only) and API base URL for the private [`pending-journal-clubs`](https://github.com/ReproducibiliTea-org/pending-journal-clubs) repo — see below.

`AUTH_CODE` is no longer used and can be removed — JC creation now uses email confirmation + admin review instead of a shared password.

New JCs…
