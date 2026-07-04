---
repo: "numpy/numpy.org"
name: "numpy.org"
description: "The NumPy home page"
readmeQualityOk: true
url: "https://github.com/numpy/numpy.org"
homepage: "http://numpy.org/"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [34, 33]
stars: 125
forks: 134
openIssues: 38
closedIssues: 213
watchers: 26
contributors: 115
recentReleases: 0
createdAt: "2010-10-04T18:52:18Z"
lastCommitAt: "2026-07-04T23:16:10Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 49
maintainers: ["charris", "melissawm", "InessaPawson"]
openGraphImageUrl: "https://opengraph.githubassets.com/fca3a482c15ffee14ba2003ee9c9530e22a957e84790bbbb227be65cab9c16aa/numpy/numpy.org"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/numpy", "TIDELIFT:https://tidelift.com/funding/github/pypi/numpy", "CUSTOM:https://numpy.org/about/#donate"]
---

# Numpy.org

## Getting Started

To contribute to the website, you'll first need to install the *extended
version* of Hugo.

The Hugo [install page](https://gohugo.io/getting-started/installing/) has
instructions for different platforms and installers; make sure you end up with
the extended version.

On Linux, it may be easiest to pick up a tarball of the latest extended version
from the [release page](https://github.com/gohugoio/hugo/releases/) and
install it as described in https://gohugo.io/getting-started/installing/#install-hugo-from-tarball.

Next, clone this repository, and install the theme:

```bash
git submodule update --init --recursive
```

The development web server is started with:

```bash
make serve
```

If you don't have `make` available (e.g., on Windows), use this instead:
```bash
python gen_config.py
hugo server
```

After that, the site should be available at http://localhost:1313.

You'll see

```bash
error: failed to transform resource: TOCSS: failed to transform "style.sass"
```

if you don't have the Hugo extended version.

## User Experience (UX)

### NumPy Color Palette

 `RGB 1/50/67 | HEX #013243 | NumPy Warm Black`

 `RGB 77/119/207 | HEX #4D77CF |…
