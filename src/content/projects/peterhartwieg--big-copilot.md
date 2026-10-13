---
repo: "PeterHartwieg/big-copilot"
name: "big-copilot"
description: "A progress board read straight from a Big Ambitions save, in the browser or locally"
readmeQualityOk: true
url: "https://github.com/PeterHartwieg/big-copilot"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [54, 38]
stars: 10
forks: 4
openIssues: 32
closedIssues: 144
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-09-09T07:40:00Z"
lastCommitAt: "2026-10-13T10:58:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 53
maintainers: ["PeterHartwieg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c87021e36f2def7ac6e5bceeb74cb3ddbb35aecf0a111c87536607b25d75c35/PeterHartwieg/big-copilot"
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
