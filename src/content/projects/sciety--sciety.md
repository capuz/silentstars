---
repo: "sciety/sciety"
name: "sciety"
description: "Where research is evaluated and curated by the communities you trust"
readmeQualityOk: true
url: "https://github.com/sciety/sciety"
homepage: "https://sciety.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 17
forks: 10
openIssues: 2
closedIssues: 1619
watchers: 8
contributors: 21
recentReleases: 0
createdAt: "2020-04-15T15:00:24Z"
lastCommitAt: "2026-07-21T06:10:49Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 72
maintainers: ["LinaKind", "dependabot[bot]", "erkannt"]
openGraphImageUrl: "https://opengraph.githubassets.com/f54a2f67e19cf36ed8c4b2a7006870344d0b1da7cc4c1e36a4ba5a673ddbdf2a/sciety/sciety"
---

Sciety
======

The repo for [sciety.org].

Developed and maintained by Sciety's remote first [ensemble programming] team.

Development
-----------

<details>

<summary>Requirements</summary>

- [Docker]
- [Docker Compose]
- [GNU Make]
- [Node.js]
- [Git LFS]
- [coreutils] (for the `timeout` command)
- Unix-like operating system

</details>

### Running the app

To build and run the app for development, execute:

```shell
make dev
```

You can now access the app at <http://localhost:8080>.

Certain parts of the application require you to have set up credentials for external services on your machine.

Most content will be missing as the database will be empty, see the Operations section below on how to populate it.

Containers restart automatically on most code changes. If they don't, `ctrl-c` and rerun `make dev`. An example of when this is needed, is changes to `package.json`.

#### Configuring environment variables and credentials

Environment variables control certain behaviour.

For the application to be able to interact with external services, credentials need to be provided via the `.env` file as well as dedicated credential files.

Before running `make dev` you have to…
