---
repo: "PREreview/prereview.org"
name: "prereview.org"
description: "The source code for prereview.org."
readmeQualityOk: true
url: "https://github.com/PREreview/prereview.org"
homepage: "https://prereview.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 16
forks: 2
openIssues: 13
closedIssues: 315
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2022-05-06T08:59:40Z"
lastCommitAt: "2026-11-05T11:24:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["thewilkybarkid", "erkannt", "prereview-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/68d499e1a4ac771e281ad9ab42da8e4ff0c9b3c9e60d69220b974cb2210c0b87/PREreview/prereview.org"
---

# prereview.org

The source code for [prereview.org].

## Development

- [Bash]
- [Docker]
- [Docker Compose]
- [watchexec]
- [GNU Make]
- [intlc]
- [mkcert]
- [Node.js]
- [pnpm]
- [Git LFS]
- Unix-like operating system

### Running the app

To build and run the app for development, execute:

```shell
make start
```

You can now access the app at <https://localhost>.

You will also have a `.env` file. This file contains environment variables controlling specific behaviors, including credentials for accessing external services.

## Operations

Once it passes CI, we deploy every commit on the `main` branch to [prereview.org], [sandbox.prereview.org] and [translate.prereview.org], which [Fly.io] hosts.

[bash]: https://www.gnu.org/software/bash/
[docker]: https://www.docker.com/
[docker compose]: https://docs.docker.com/compose/
[fly.io]: https://fly.io/
[git lfs]: https://git-lfs.github.com/
[gnu make]: https://www.gnu.org/software/make/
[intlc]: https://github.com/unsplash/intlc
[mkcert]: https://github.com/FiloSottile/mkcert
[node.js]: https://nodejs.org/
[pnpm]: https://pnpm.io/
[prereview.org]: https://prereview.org/
[sandbox.prereview.org]: https://sandbox.prereview.org/…
