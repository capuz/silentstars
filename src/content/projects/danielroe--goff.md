---
repo: "danielroe/goff"
name: "goff"
description: "Sync GitHub issues offline into a local folder"
readmeQualityOk: true
url: "https://github.com/danielroe/goff"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 87
forks: 1
openIssues: 8
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-20T07:22:06Z"
lastCommitAt: "2026-09-07T08:34:26Z"
lastReleaseAt: "2024-09-03T11:35:49Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 76
undervaluedScore: 35
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/42debbbb802887201121f0736d89eb08f2eae674a8075e176dcd1d597996fa08/danielroe/goff"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# goff

> Sync GitHub issues offline into a local folder

🚧 This CLI is heavily in development - and contribution is welcome! But do expect changes in the public API...

## Usage

Run the sync command within the root of a Git repo. It will create a `.goff` folder and populate it with Markdown files corresponding to the GitHub issues in your repository.

```sh
npx goff@latest sync

# npx goff@latest sync --closed --repo unjs/fontaine
```

If you are hitting a GitHub rate limit you can create a token [here](https://github.com/settings/tokens/new) and provide it:

```sh
npx goff@latest auth --token <GitHub token>
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with ❤️

Published under [MIT License](https://github.com/danielroe/goff/blob/HEAD/LICENCE).

[npm-version-src]: https://npmx.dev/api/registry/badge/version/goff
[npm-version-href]: https://npmx.dev/package/goff
[npm-downloads-src]: https://npmx.dev/api/registry/badge/downloads/goff
[npm-downloads-href]: https://npm.chart.dev/goff…
