---
repo: "apache/xmlgraphics-website"
name: "xmlgraphics-website"
description: "Apache XML Graphics Website"
readmeQualityOk: true
url: "https://github.com/apache/xmlgraphics-website"
homepage: "https://xmlgraphics.apache.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [76]
topics: ["apache", "xmlgraphics"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2020-08-25T12:38:24Z"
lastCommitAt: "2026-10-25T08:39:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 65
undervaluedScore: 67
maintainers: ["simonsteiner1984", "joao12021996"]
openGraphImageUrl: "https://opengraph.githubassets.com/9af4ad941d888aa07abf43aed6bb6edb27691998eb35f104e56394e67f27838f/apache/xmlgraphics-website"
---

# Apache XML Graphics website

Source for the [Apache XML Graphics](https://xmlgraphics.apache.org/) website
(FOP, Batik and XML Graphics Commons). The site is built with
[Pelican](https://getpelican.com/) from the Markdown (`.mdtext`) files under
`content/`.

## Prerequisites

- Python 3
- The build dependencies:

      pip install -r requirements.txt

## Build and preview locally

1. Build the site into `output/`:

       pelican content -s pelicanconf.py -o output

2. Serve `output/` over HTTP on port 8000:

       pelican -l -o output -s pelicanconf.py

3. Open the site in your browser, for example:

   - <http://localhost:8000/> — site home
   - <http://localhost:8000/fop/2.12/releaseNotes_2.12.html> — a specific page

While editing, you can build, serve and auto-rebuild on changes in one command
(then just refresh the browser):

    pelican -lr content -s pelicanconf.py -o output

**Note:** `SITEURL` is empty and `RELATIVE_URLS` is off, so pages use
root-relative links (`/fop/...`, `/images/...`). Open the pages through the
local HTTP server above rather than with `file://`, otherwise links, CSS and
images will not resolve. (Setting `RELATIVE_URLS = True` in `pelicanconf.py`…
