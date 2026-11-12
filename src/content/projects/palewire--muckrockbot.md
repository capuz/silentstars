---
repo: "palewire/muckrockbot"
name: "muckrockbot"
description: "A Fediverse robot account that posts the latest public records requests filed and completed at muckrock.com"
readmeQualityOk: true
url: "https://github.com/palewire/muckrockbot"
homepage: "https://mastodon.palewi.re/@muckrockbot"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["python", "journalism", "heroku", "bot", "mastodon", "news", "public-records"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 2
recentReleases: 1
createdAt: "2019-01-05T13:47:18Z"
lastCommitAt: "2026-11-12T05:39:05Z"
lastReleaseAt: "2026-09-10T23:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 70
maintainers: ["palewire"]
openGraphImageUrl: "https://opengraph.githubassets.com/34140649a58157fe1d1977f4f797bce9b744c41c20de07f42c4b4942174346bc/palewire/muckrockbot"
---

A Fediverse robot account that posts the latest public records requests filed
at muckrock.com at [mastodon.palewi.re/@muckrockbot](https://mastodon.palewi.re/@muckrockbot).
It also saves completed-request snapshots, but does not post them.

## Development

This project uses Python 3.11 or newer and [uv](https://docs.astral.sh/uv/) for
dependencies.

```sh
make install-dev
make check
make test
```

Use `make fix` to apply safe lint and formatting changes. Tests use fake API
responses and temporary data directories. They never call MuckRock or post to
social accounts.

## Restore authenticated downloads

API v1 remains available with a legacy API token. The bot intentionally uses
`python-muckrock==0.1.1` to preserve its request filters, author credits and
links. Obtain your token from MuckRock through a secure channel and save it
as the `MUCKROCK_API_TOKEN` GitHub Actions secret. Do not put tokens in files,
command arguments, logs or commits.

For local use, supply the same environment variable through your secret
manager. Then check authentication and both response shapes without saving
anything or posting:

```sh
uv run python -m muckrockbot.download --check
```

Downloads request…
