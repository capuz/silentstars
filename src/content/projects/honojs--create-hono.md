---
repo: "honojs/create-hono"
name: "create-hono"
description: "CLI for creating a Hono app"
readmeQualityOk: true
url: "https://github.com/honojs/create-hono"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 111
forks: 24
openIssues: 10
closedIssues: 32
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2023-01-12T12:29:11Z"
lastCommitAt: "2026-11-05T14:04:44Z"
lastReleaseAt: "2024-02-13T01:09:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 31
maintainers: ["yusukebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c10669f05773d58bd24e2dd79440880db3364110a2813abdcd8e94e6cafdc09/honojs/create-hono"
---

# Create Hono

Create a Hono application from starter templates.

## Quick Start

Starter templates are available for each platform. Use one of the following "create-hono" commands.

```bash
# npm
npm create hono@latest

# yarn
yarn create hono

# pnpm
pnpm create hono@latest

# bun
bun create hono@latest

# deno
deno init --npm hono
```

## Options

### `-t, --template <template>`

You can specify the desired template from the command line. This is useful for automation, where you'd like to skip any interactive prompts.

```
npm create hono@latest ./my-app -- --template cloudflare-workers
```

### `-i, --install`

Install dependencies after cloning template.

```
npm create hono@latest ./my-app -- --install
```

### `-p, --pm <pnpm|bun|deno|npm|yarn>`

Allows you to specify which package manager to use.

```
npm create hono@latest ./my-app -- --pm pnpm
```

### `-o, --offline`

Use the local cache instead of fetching the latest templates.

```
npm create hono@latest ./my-app -- --offline
```

## Author

Yusuke Wada <https://github.com/yusukebe>

and Hono contributors

## License

MIT

This project source code is based on **Create Solid** MIT Licensed.
