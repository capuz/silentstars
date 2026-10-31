---
repo: "abduzeedo/mapc-site"
name: "mapc-site"
description: "MaPC website and downloads"
readmeQualityOk: true
url: "https://github.com/abduzeedo/mapc-site"
language: "HTML"
languages: ["HTML"]
languagePcts: [84]
stars: 22
forks: 2
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T04:19:58Z"
lastCommitAt: "2026-10-31T15:58:19Z"
lastReleaseAt: "2026-10-17T15:46:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["abduzeedo"]
openGraphImageUrl: "https://opengraph.githubassets.com/58e09cfe3ed2a522a72be8ad70552b5343c1b65684c511813f5576a34418267c/abduzeedo/mapc-site"
---

# MaPC website

Plain HTML, CSS and a little JavaScript. No frameworks, no web fonts, no third-party requests, no cookies.
Published with GitHub Pages at https://mapc.games.

## Edit
- Pages live in `pages/` (HTML for the `<main>` part, with `title:` and `description:` lines on top).
- Settings (download link, Gumroad link, support email, version) are at the top of `build.py`.
- `python3 build.py` regenerates the `.html` files, `sitemap.xml`, `robots.txt`, `favicon.svg` and `CNAME`. Commit the result.
- Preview: open `index.html` in a browser. To see the Wall of Fame, serve the folder: `python3 -m http.server` and open http://localhost:8000.

## Wall of Fame
`supporters.json` is read by the site and by the MaPC app. Rebuild it from a Gumroad sales export with `scripts/supporters-from-gumroad.py` in the app repo, then commit it here.

## Releases
Put `MaPC.dmg`, the engine tarballs and the LGPL source archives on GitHub Releases of this repo. The download button points to `releases/latest/download/MaPC.dmg`, so name the file exactly `MaPC.dmg`.

## Publish (GitHub Pages)
1. Create the repo (public) and push `main`.
2. Settings > Pages > Deploy from branch `main`, folder `/ (root)`.…
