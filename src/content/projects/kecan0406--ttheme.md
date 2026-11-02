---
repo: "kecan0406/ttheme"
name: "ttheme"
description: "Your favorite anime and game characters' colors in your terminal, one tab at a time"
readmeQualityOk: true
url: "https://github.com/kecan0406/ttheme"
homepage: "https://ttheme.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["alacritty", "anime", "color-scheme", "ghostty", "iterm2", "kitty", "terminal-theme", "wezterm", "zsh", "cli"]
stars: 8
forks: 1
openIssues: 3
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-21T10:24:14Z"
lastCommitAt: "2026-11-02T17:55:16Z"
lastReleaseAt: "2026-09-23T23:34:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["kecan0406"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1379509338/05e84ef3-430f-4b97-83e6-f1e3b111260b"
---

ttheme gives your terminal the colors of a character you love. Every tab can
show its own palette, and every built-in palette passes contrast checks, so your
text stays easy to read.

## Quick start

```sh
npx @kecan0406/ttheme@latest init
```

With Bun, `bunx @kecan0406/ttheme@latest init` does the same, and `ttheme update`
then updates through bunx. `init` asks which terminals to wire and which palettes
to install, shows every file it will change, and writes nothing until you
confirm. ttheme requires Node.js `>=22` and zsh, which macOS ships, with bunx
too. From bash or fish, `ttheme` works too.

Then load the command and try palettes on:

```sh
exec zsh   # the ttheme command in this tab
ttheme     # the tab shows each palette the cursor lands on; enter keeps one
```

ttheme adds one block to each config it wires and sets colors only.
`npx @kecan0406/ttheme@latest uninstall` takes it all back out
([what changed](https://ttheme.dev/docs/guide/use#what-init-changes)).

## What you can do

| To | Run |
|---|---|
| Try palettes on and keep one | `ttheme` |
| Use a palette in this tab | `ttheme use hatsune-miku` |
| Set the palette new tabs open with | `ttheme default hatsune-miku`…
