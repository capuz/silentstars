---
repo: "khrizt/GotoLastEdit"
name: "GotoLastEdit"
description: "Sublime plugin to go to last edit position"
readmeQualityOk: true
url: "https://github.com/khrizt/GotoLastEdit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 19
forks: 3
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2012-03-05T22:54:13Z"
lastCommitAt: "2026-10-26T09:17:05Z"
lastReleaseAt: "2026-10-26T09:11:37Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: ["khrizt"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad55e877781fc02645392774e449f393649d54429033a078be930ddb1a52f212/khrizt/GotoLastEdit"
---

# GotoLastEdit

A Sublime Text plugin that jumps to previous edit locations — including edits in other tabs.

## Install

### Manual

1. Open the Sublime Text Packages folder
   (`Preferences → Browse Packages…`).
2. Clone or copy this folder there as `GotoLastEdit`:

```bash
cd "$(python3 -c 'import os; print(os.path.expanduser("~"))')"  # then open Packages via the menu
git clone <this-repo-url> GotoLastEdit
```

3. Restart Sublime Text (or wait for the plugin to reload).

### From the original Package Control package

If you already have the Package Control package installed, replace its files with the ones from this repo (or remove it and use the manual install above) so you pick up these fixes.

## Usage

Default binding (all platforms):

```
Ctrl + Q
```

Each press walks further back through recent edit locations. When the most recent edit was in another tab, the command focuses that tab and selects the edited line.

### Key binding conflicts

On some Linux builds and Sublime Text 3/4 setups, `Ctrl+Q` is also bound to quit. Remap via
`Preferences → Package Settings → GotoLastEdit → Key Bindings`, for example:

```json
[
    {
        "keys": ["ctrl+alt+q"],…
