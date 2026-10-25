---
repo: "PeterHartwieg/big-copilot"
name: "big-copilot"
description: "A progress board read straight from a Big Ambitions save, in the browser or locally"
readmeQualityOk: true
url: "https://github.com/PeterHartwieg/big-copilot"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 39]
stars: 10
forks: 5
openIssues: 14
closedIssues: 169
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-09-09T07:40:00Z"
lastCommitAt: "2026-10-25T22:11:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["PeterHartwieg"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4dea968ac2df8e68e4b018fc915552ee011d62e5ea0b38212ecd4aef3d4b13a/PeterHartwieg/big-copilot"
---

# Big Copilot

A dashboard for your Big Ambitions save: profits, stock, supply chains, staffing
and market demand. It reads `.hsg` files without modifying them.

The Python script reads saves off the disk it runs on: the game's own folder to
follow along while you play, or a copied `.hsg` anywhere else. The website runs
anywhere and reads whichever save you hand the browser.

## Use it in your browser

1. Open [bigcopilot.com](https://bigcopilot.com).
2. Drop a `.hsg` save onto the page, or choose your save folder below.
3. Use the save menu to switch characters or choose a particular save.

**No installation or game-text file is needed.** Names, recipes and station
capacities are included. Saves are processed on your computer and are not uploaded.
The browser downloads a Python runtime on first use.

Chrome and Edge can remember and watch a connected folder for new saves. Returning
visits reopen it automatically when access is still granted; otherwise, click
**Open newest save** or **Open chosen save** to reconnect. Firefox and Safari read a snapshot of the selected files;
use **Update** to pick them again. Dropping a single file does not watch its folder.

### Host the site…
