---
repo: "hyperpuncher/pi-ui"
name: "pi-ui"
description: "minimal gui for pi"
readmeQualityOk: true
url: "https://github.com/hyperpuncher/pi-ui"
homepage: "https://pi-ui.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["datastar", "gui", "pi", "bun"]
stars: 111
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-06T13:38:20Z"
lastCommitAt: "2026-09-15T08:55:18Z"
lastReleaseAt: "2026-07-08T10:51:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["hyperpuncher"]
openGraphImageUrl: "https://opengraph.githubassets.com/52d8dbd49b866ff078b4f390aa54aa4d538eaa0c0adbe18dc97db33d9f8d3584/hyperpuncher/pi-ui"
---

# pi-ui

keyboard-first minimal gui for [`pi`](https://pi.dev)

	<picture>
		<source
			srcset=".github/assets/demo-dark.webp"
			media="(prefers-color-scheme: dark)"
		>
		<source
			srcset=".github/assets/demo-light.webp"
			media="(prefers-color-scheme: light)"
		>
	</picture>
</div>

## features

- background sessions
- git review with commit history and inline comments
- markdown, syntax highlighting, and rich diffs
- file attachments with image previews

## built with

- [`pi`](https://github.com/earendil-works/pi)
- [`datastar`](https://data-star.dev/)
- [`kita-jsx`](https://github.com/kitajs/html)
- [`pierre-diffs`](https://diffs.com/)

## try

> requires bun 1.4+

```sh
bunx @hyperpuncher/pi-ui
```

## install

### quick install

> the quick installers start pi-ui in the background and at login

#### linux and macos

```sh
curl -fsSL https://pi-ui.app/install | sh
```

#### windows

```powershell
irm https://pi-ui.app/install.ps1 | iex
```

open [http://127.0.0.1:31415](http://127.0.0.1:31415) in your browser

### package managers

#### bun

> requires bun 1.4+

```sh
bun i -g @hyperpuncher/pi-ui
```

#### arch

```sh
paru -S pi-ui-bin
```

#### homebrew

```sh
brew…
