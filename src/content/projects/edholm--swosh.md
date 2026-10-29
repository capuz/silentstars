---
repo: "Edholm/swosh"
name: "swosh"
description: "Simple service that creates \"Swosh\" short links you can share with friends"
readmeQualityOk: true
url: "https://github.com/Edholm/swosh"
homepage: "https://swosh.me"
language: "Go"
languages: ["Go"]
languagePcts: [69]
stars: 8
forks: 4
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2017-04-06T19:59:27Z"
lastCommitAt: "2026-10-29T21:19:20Z"
lastReleaseAt: "2026-10-29T20:20:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 100
undervaluedScore: 96
maintainers: ["Edholm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/452ae872b422df54b5a55706e666564925a235fc3186d061fb68e81166866b0e/Edholm/swosh"
---

# Swosh.me 

Used for creating short links that you can send to your friends, thus allowing them to easily launch Swish with your preset information.

This is useful since https:// links are almost universally clickable.

Swosh is a Go service backed by PostgreSQL. `swosh serve` applies the database migrations
and serves the public site: `POST /api/create`, the start page, the `/{id}` preview,
`/{id}/redir` and `/{id}/qr`. Expired links are deleted in the background. `/health` and
`/prometheus` are on the actuator port.

Admins log in at `/login` (or with HTTP Basic) and manage links at `/admin`. That needs
`ROLE_ADMIN`; editing needs `UPDATE` and deleting `DELETE`. Logins are signed cookies,
valid for 12 hours.

`swosh admin add <username>` creates another admin user with all of those. It asks for
the password on a terminal, or reads the first line of stdin, and fails if the user
exists. In the compose setup: `docker compose exec swosh /ko-app/swosh admin add <username>`.

## Requirements

* Go 1.27 (an older `go` downloads it automatically)
* Docker Engine 25+ with Docker Compose 2.24+
* [ko](https://ko.build) for the image; `make tools` installs the pinned version into `./bin`…
