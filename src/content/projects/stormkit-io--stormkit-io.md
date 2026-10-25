---
repo: "stormkit-io/stormkit-io"
name: "stormkit-io"
description: "Self-hostable alternative to Vercel/Netlify. Deploy modern web apps with automated CI/CD, custom domains, and environment management."
readmeQualityOk: true
url: "https://github.com/stormkit-io/stormkit-io"
homepage: "https://www.stormkit.io"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 31]
topics: ["deployment", "hosting", "ci-cd", "devops", "docker", "golang", "nextjs", "nodejs", "paas", "react"]
stars: 264
forks: 19
openIssues: 12
closedIssues: 52
watchers: 4
contributors: 6
recentReleases: 7
createdAt: "2025-11-03T13:22:25Z"
lastCommitAt: "2026-10-25T08:40:16Z"
lastReleaseAt: "2026-08-01T11:25:45Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 42
maintainers: ["svedova", "robertocommit"]
openGraphImageUrl: "https://opengraph.githubassets.com/2293c16be7c3e0f1650bb34fb419518068b2ea97a81a6e2f8281883459945021/stormkit-io/stormkit-io"
discussionCount: 1
---

# Stormkit

Deploy your app and get the pieces it needs — a Postgres database, end-user
authentication, a transactional mailer, scheduled jobs and analytics — on
infrastructure you own.

```bash
curl -sSL https://www.stormkit.io/install.sh | sh
```

That is a working Stormkit on your own server: git push to deploy, a preview URL
per branch, custom domains with automatic TLS.

## What you get

| | |
| --- | --- |
| **Deployments** | Git push, UI, zip upload or API. A [preview URL per branch](https://www.stormkit.io/docs/deployments/auto-deployments), [environments](https://www.stormkit.io/docs/features/multiple-environments) with their own config, [status checks](https://www.stormkit.io/docs/deployments/status-checks) before publishing |
| **Any language** | Runtimes come from [mise](https://mise.jdx.dev) — Node.js, Go, Python, Ruby and anything else it supports. System packages from a `flake.nix`. A [start command](https://www.stormkit.io/docs/deployments/application-runtime) runs a long-lived server in any language |
| **Database** | [PostgreSQL](https://www.stormkit.io/docs/features/database) attached to an environment, with migrations run on deploy |
| **Authentication** |…
