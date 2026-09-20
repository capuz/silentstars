---
repo: "andrewkoltsov/librus-sdk"
name: "librus-sdk"
description: "Unofficial TypeScript SDK and CLI for Librus Synergia."
readmeQualityOk: true
url: "https://github.com/andrewkoltsov/librus-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["cli", "education", "librus", "sdk", "typescript", "api-client", "dziennik", "e-dziennik", "edziennik", "librus-api"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T21:47:25Z"
lastCommitAt: "2026-09-20T08:44:50Z"
lastReleaseAt: "2026-04-13T12:45:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 40
maintainers: ["dependabot[bot]", "andrewkoltsov", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d88eca25c22c989fe65e139fb079a7e22a1b7e5d9e8ec709e77aedf084b0d77a/andrewkoltsov/librus-sdk"
---

# librus-sdk

Fresh TypeScript SDK and CLI for the Librus family portal and Gateway API 2.0
JSON flows.

For Portal accounts, this project logs into `portal.librus.pl`, loads linked
child accounts from `portal/api/v3/SynergiaAccounts`, and uses the selected
child account's bearer token against `https://api.librus.pl/3.0`.

For school-issued accounts, it can also log in with the Gateway API 2.0 login
and password, keep the resulting Synergia cookies, and read
`https://synergia.librus.pl/gateway/api/2.0`. That backend is already scoped to
one account and does not support Portal-only child discovery.

It intentionally does not reuse the legacy `synergia.librus.pl` HTML-scraping
approach.

## Acknowledgements

This implementation was inspired by
[Mati365/librus-api](https://github.com/Mati365/librus-api/).

## Security

Report vulnerabilities privately as described in [`SECURITY.md`](https://github.com/andrewkoltsov/librus-sdk/blob/HEAD/SECURITY.md).

Never commit, log, or print real credentials, bearer tokens, cookies, or other
secrets in source files, fixtures, examples, or documentation.

The repository also publishes a weekly
[OpenSSF Scorecard…
