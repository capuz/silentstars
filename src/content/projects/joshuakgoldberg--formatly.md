---
repo: "JoshuaKGoldberg/formatly"
name: "formatly"
description: "Formats code with whatever formatter a project is already using. 🧼"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/formatly"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 48
forks: 4
openIssues: 3
closedIssues: 45
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-01-08T12:26:29Z"
lastCommitAt: "2026-11-24T01:58:37Z"
lastReleaseAt: "2026-08-19T05:06:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 54
maintainers: ["renovate[bot]", "JoshuaKGoldberg", "allcontributors[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/72a07744519bfad72bfb92661d59f494e1bd7d31a979972771ad6cb442378be6/JoshuaKGoldberg/formatly"
---

Formats your code with whatever formatter your project is already using.
	🧼

	
	

	

## Usage

`formatly` can automatically detect and format with:

- [Biome](https://biomejs.dev/formatter)
- [deno fmt](https://docs.deno.com/runtime/reference/cli/fmt)
- [dprint](https://dprint.dev)
- [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- [Prettier](https://prettier.io)

See [Formatter Detection](#formatter-detection) for details on how they are detected.

### CLI

```shell
npx formatly <files>
```

`formatly` takes in any number of glob patterns.
It will then:

1. Detect which [supported formatter](#supported-formatters) is configured in the repository
2. Pass those glob patterns directly to the formatter

For example, to match all directories and folders in the current directory:

```shell
npx formatly *
```

To match only `.ts` files in `src/`:

```shell
npx formatly "src/**/*.ts"
```

Unknown flags are rejected rather than passed to the formatter.
To pass formatter flags or patterns that start with `-`, put them after `--`:

```shell
npx formatly -- --check src
```
