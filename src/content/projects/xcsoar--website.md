---
repo: "XCSoar/website"
name: "website"
description: "The XCSoar website"
readmeQualityOk: true
url: "https://github.com/XCSoar/website"
homepage: "https://xcsoar.org"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [44, 30]
topics: ["xcsoar", "ruby", "jekyll", "html", "css"]
stars: 7
forks: 12
openIssues: 4
closedIssues: 24
watchers: 10
contributors: 34
recentReleases: 0
createdAt: "2017-09-15T20:40:00Z"
lastCommitAt: "2026-08-10T05:05:32Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 65
maintainers: ["lordfolken", "renovate[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0bc54cbbd8fff2f461c545a64beba10f07017777f0fc8dbc0fa158bd69072a2/XCSoar/website"
---

# XCSoar website

Source for [xcsoar.org](https://xcsoar.org/): a static site built with [Jekyll](https://jekyllrb.com/) (~> 4.4, see `Gemfile`).

## Requirements

- Ruby and Bundler (CI uses Ruby **4.0.x**; see [`.github/workflows/website-deploy.yml`](https://github.com/XCSoar/website/blob/HEAD/.github/workflows/website-deploy.yml))

On Debian/Ubuntu, install optional packages so local builds match production asset steps:

```bash
sudo apt-get install -y yui-compressor
```

## Build and preview

```bash
bundle install
bundle exec jekyll build
```

Site output is `_site/`. For a local server (default <http://127.0.0.1:4000/>):

```bash
bundle exec jekyll serve
```

CI runs `bundle exec jekyll build --future`; use `--future` locally if you need future-dated posts included.

## Docker

Example using the official Ruby image (no Ruby on the host):

```bash
docker run --rm -it --network host -v "$PWD:/data" -w /data ruby:4 bash -lc \
  "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

`--network host` lets you reach the server from the host on port 4000 on Linux.

## Deployment

Pushes to **`master`** trigger…
