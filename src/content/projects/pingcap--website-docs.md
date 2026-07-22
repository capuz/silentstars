---
repo: "pingcap/website-docs"
name: "website-docs"
description: "The next generation of PingCAP Docs. Powered by Gatsby ⚛️."
readmeQualityOk: true
url: "https://github.com/pingcap/website-docs"
homepage: "https://docs.pingcap.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 23
forks: 33
openIssues: 20
closedIssues: 110
watchers: 8
contributors: 163
recentReleases: 0
createdAt: "2020-05-18T09:23:23Z"
lastCommitAt: "2026-07-22T06:10:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["shhdgit", "qiancai", "Oreoxmt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a675f9b1f9aa2e3fc9ae63a5f68925c4b5db2511fae56b338f24fe6fee5f1eaa/pingcap/website-docs"
---

</p>
<h1 align="center">website-docs</h1>

[Click here to view.](https://docs.pingcap.com/)

## Quick Start

1. Clone this repo;

2. Enable Corepack once if `pnpm` is not already available:

- Run `corepack enable`;

3. Install dependencies:

- Run `pnpm install`;

4. Download docs:

- Run `git submodule init`;
- Run `git submodule update --depth 1 --remote`;

### After download

Run `pnpm start` to develop:

```sh
pnpm start
```

In order to debug algolia searches, you need to provide two additional environment variables:

- `GATSBY_ALGOLIA_APPLICATION_ID`
- `GATSBY_ALGOLIA_API_KEY`

Put them in `.env.development` to make them take effect. (Ref: <https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/>)

## Workflow

Because of most of our text data stored in GitHub. It's needed to apply a GitHub API token in development **when you are prompted for `rate-limiting`**.

For more details, view <https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting>.

You must set the token as an env when you start some commands, defined as:

```sh
GITHUB_AUTHORIZATION_TOKEN=token
```

## The rules we followed

For better collaboration and review, we…
