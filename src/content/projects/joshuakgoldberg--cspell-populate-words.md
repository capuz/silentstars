---
repo: "JoshuaKGoldberg/cspell-populate-words"
name: "cspell-populate-words"
description: "Populates your cspell.json dictionary with existing unknown words. 🔖"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/cspell-populate-words"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [80, 20]
stars: 6
forks: 0
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2024-12-11T18:07:53Z"
lastCommitAt: "2026-11-24T02:00:51Z"
lastReleaseAt: "2026-11-24T01:59:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 64
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c0745e680123662d1304f71311dff24841f8afd5c310bdbcabdd062bb638f05/JoshuaKGoldberg/cspell-populate-words"
---

Populates your cspell.json dictionary with existing unknown words.
	🔖

	
	

	

## Usage

Run `cspell-populate-words` as a command in your CLI to add any words currently reported by `cspell` as typos to the `words` array in your `cspell.json`.

```shell
npx cspell-populate-words "**/*"
```

If a `cspell.json` doesn't yet exist, one will be created for you.

If the `prettier` package is available, such as already being a dependency in your repository, it will be used to format the file.

### Options

`cspell-populate-words` takes in any non-zero number of file globs to look at.
The file globs are passed directly to the `cspell` CLI.

For example, to look at all files, and opt into `.github/`:

```shell
npx cspell \"**/*\" \".github/**/*\"
```

#### `--words`

Any number of `--words` can be provided along with -or instead of- positional file globs.
These words will be passed to [`cspell`'s `stdin` option](https://cspell.org/docs/getting-started/#options).

For example, providing `mistake`, `typo`, and `zzz` as words:

```shell
npx cspell --words mistake --words "typo zzz"
```

Providing `typo` alongside file globs:

```shell
npx cspell \"**/*\" --words typo
```
