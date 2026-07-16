---
repo: "hyperpuncher/pi-ui"
name: "pi-ui"
description: "minimal gui for pi"
readmeQualityOk: true
url: "https://github.com/hyperpuncher/pi-ui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["datastar", "deno", "gui", "pi"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-06T13:38:20Z"
lastCommitAt: "2026-07-16T05:57:38Z"
lastReleaseAt: "2026-07-08T10:51:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["hyperpuncher"]
openGraphImageUrl: "https://opengraph.githubassets.com/b54c9a74db9cbdd4c140afd5626f2de59456db985c242f6cf05c5eb65ffe302f/hyperpuncher/pi-ui"
---

# pi-ui

keyboard-first minimal gui for [`pi`](https://pi.dev).

	<picture>
		<source
			srcset=".github/assets/screenshot-dark.png"
			media="(prefers-color-scheme: dark)"
		>
		<source
			srcset=".github/assets/screenshot-light.png"
			media="(prefers-color-scheme: light)"
		>
	</picture>
</div>

feature parity with the pi tui, plus desktop niceties like background sessions,
native notifications, file paste/drop, and rich code/diff rendering.

built with:

- [`deno-desktop`](https://docs.deno.com/runtime/desktop/)
- [`datastar`](https://data-star.dev/)
- [`kita-jsx`](https://github.com/kitajs/html)
- [`sätteri`](https://github.com/bruits/satteri)
- [`pierre-diffs`](https://diffs.com/)
- [`basecoat`](https://basecoatui.com/)

## install

### arch

```sh
paru -S pi-ui-bin
```

### debian / ubuntu

download the `.deb` for your architecture from the [latest release](https://github.com/hyperpuncher/pi-ui/releases/latest), then:

```sh
sudo apt install ./pi-ui-linux-*.deb
```

### other linux

download the `.AppImage` for your architecture from the [latest release](https://github.com/hyperpuncher/pi-ui/releases/latest), then:

```sh
chmod +x pi-ui-linux-*.AppImage…
