---
repo: "mDuo13/fractal-of-insight"
name: "fractal-of-insight"
description: "Analyze Grand Archive TCG tournament results"
readmeQualityOk: true
url: "https://github.com/mDuo13/fractal-of-insight"
language: "Python"
languages: ["Python", "Jinja", "JavaScript"]
languagePcts: [43, 27, 21]
stars: 13
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-07-21T07:12:43Z"
lastCommitAt: "2026-09-01T08:51:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["mDuo13", "jasonly"]
openGraphImageUrl: "https://opengraph.githubassets.com/46f32fdc009e7a65dd61b94799f48746d7b035a4353ba766a3af7e36762299ad/mDuo13/fractal-of-insight"
---

# Fractal of Insight
A Grand Archive TCG tournament analysis site

This site shows information and analysis of Grand Archive tournament results. It uses the Omnidex API, which is beta and subject to change without notice, in a way that is officially unsupported but hopefully OK with Weebs of the Shore.

## Setup & Usage

Fractal is essentially a static site builder that uses locally-cached data from various public sources (Omnidex, Index, & TCGCSV). So after setup, the process is download → run → preview as static HTML site.

After cloning the repo, edit `fractal/config.py` and change the `OUTDIR` to be a path where the ouput should go (e.g. `/srv/http`).

```sh
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
./scrape-index.py
./scrape-tcgprice.py
./main 52777
```

Use `./crawl-omni.py` to iterate through Omnidex IDs looking for events, or pass omni IDs to `./main.py` directly as in the above example. When run with no args, `main.py` builds all previously crawled/saved events (stored in `data/`).

You can start a local dev server to preview the site by going to your configured output directory and running `python -m http.server`. You can of course…
