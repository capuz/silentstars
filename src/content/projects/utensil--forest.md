---
repo: "utensil/forest"
name: "forest"
description: "Utensil's Zettelkasten-style forest of evergreen notes on math and tech."
readmeQualityOk: true
url: "https://github.com/utensil/forest"
homepage: "https://utensil.github.io/forest/"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [35, 21]
stars: 14
forks: 1
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-04-24T13:47:11Z"
lastCommitAt: "2026-11-12T05:20:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 65
maintainers: ["utensil"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2d7adddff49e06847639ef648b0362fae2491db2212ea17e46d78b17028ae68/utensil/forest"
---

# Utensil's Forest

My Zettelkasten-style forest of evergreen notes on math and tech: https://utensil.github.io/forest/

## Development

### Initial Setup

This forest is initialized with the following command:

```bash
brew install opam bubblewrap watchexec
opam init --auto-setup --yes
opam update --yes
opam install forester --yes
forester --version

cd ~/projects/
git init forest
cd forest
git pull https://git.sr.ht/~jonsterling/forest-template

git remote add origin https://github.com/utensil/forest.git
git branch -M main
git push -u origin main
```

To initialize `theme` directory, review and run `./thm.sh`.

Add a `forest.toml`, then:

```bash
forester new --dest=trees --prefix=uts
```
### How to run

Run `./dev.sh` to watch the modified files and serve them to be browsed.

Then open `http://localhost:1314` in your browser.

`./dev.sh` internally run `./build.sh` to build the forest and its dependencies. `./build.sh` is also used in CI, check out `.github/workflows/gh-pages.yml` for more details.

### Trouble Shooting

If something goes wrong, check out https://github.com/jonsterling/forest .

Locally I will

```bash
git clone https://git.sr.ht/~jonsterling/public-trees jms…
