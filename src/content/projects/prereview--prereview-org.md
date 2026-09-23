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
stars: 15
forks: 2
openIssues: 13
closedIssues: 306
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2022-05-06T08:59:40Z"
lastCommitAt: "2026-09-23T08:47:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["thewilkybarkid", "dependabot[bot]", "chadsansing"]
openGraphImageUrl: "https://opengraph.githubassets.com/c382c7420dae3e5cd8920a861e774088454091abf3baebb2b1a3bc4b5d5b8249/PREreview/prereview.org"
---

# prereview.org

The source code for [prereview.org].

## Development

<details>

<summary>Requirements</summary>

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

</details>

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
[prereview.org]: https://prereview.org/…
