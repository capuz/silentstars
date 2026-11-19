---
repo: "Emurasoft/emurasoft.github.io"
name: "emurasoft.github.io"
description: "Sphinx project for https://help.emeditor.com/"
readmeQualityOk: true
url: "https://github.com/Emurasoft/emurasoft.github.io"
homepage: "http://help.emeditor.com/"
language: "HTML"
languages: ["HTML"]
languagePcts: [97]
stars: 30
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2023-06-28T22:29:06Z"
lastCommitAt: "2026-11-19T05:06:08Z"
lastReleaseAt: "2023-11-09T01:31:44Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 58
maintainers: ["MakotoE", "dependabot[bot]", "yutakaemura"]
openGraphImageUrl: "https://opengraph.githubassets.com/520f62b9f7775d1f9af96a4782b0dc34de125336a035c9a5eca5a444152e91b0/Emurasoft/emurasoft.github.io"
---

# EmEditor Help

Sphinx project for [https://help.emeditor.com/](https://help.emeditor.com/).

# Build instructions

1. Install Python, then clone this repo.
2. `cd` to your local folder of the repo.
3. Optionally, create and activate a new virtual environment (venv).
4. Run `pip install -r requirements.txt` to get all dependencies.
5. Set the `PROJECT` variable to the language to build, then build the pages with `sphinx-build`. In PowerShell, the command is:

```
$env:PROJECT='en'
sphinx-build . _build/en
```

Use `buildEnglish.ps1` (English) or `buildAll.sh` (all languages) for a complete build. They run `sphinx-build` and then two post-build scripts: `strip_reference_classes.py` removes unused anchor classes, and `build_sidebar_nav.py` moves the expanded sidebar branch out of every page into `_build/<language>/_static/nav.js`. A bare `sphinx-build` skips both, and because `nav.js` is generated rather than checked in, its pages would load no expanded sidebar branch.
