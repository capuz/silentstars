---
repo: "Kong/developer.konghq.com"
name: "developer.konghq.com"
description: "🦍 Source code for developer.konghq.com website."
readmeQualityOk: true
url: "https://github.com/Kong/developer.konghq.com"
homepage: "https://developer.konghq.com"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [52, 29]
stars: 28
forks: 139
openIssues: 460
closedIssues: 2479
watchers: 63
contributors: 190
recentReleases: 0
createdAt: "2024-04-24T09:48:32Z"
lastCommitAt: "2026-11-26T12:26:31Z"
status: "watched"
tags: ["needs_contributors", "hidden_gem", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 58
maintainers: ["fabianrbz", "kong-documentation-app[bot]", "kong[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/655a478d80e15369e42168ca5aaeb018dca8c29bcf6f5718a79bae7fd2d6c1d1/Kong/developer.konghq.com"
---

# developer.konghq.com

🦍 Source code for developer.konghq.com website.

## Prerequisites

- [mise](https://mise.jdx.dev/getting-started.html).
    - Optionally configure your shell to [activate mise](https://mise.jdx.dev/getting-started.html#activate-mise) automatically.
    - You may need to run `mise trust` when first opening a new repository.
- [libyaml](https://github.com/yaml/libyaml).

## Run Locally

```bash
# Install dependencies
make install

# Create local .env file
# OAS Pages require VITE_PORTAL_API_URL to be set in your current environment, it should match the Kong supplied portal URL
cp .env.example .env

# Build the site and watch for changes 
make run
```

Once you see the `Server now ready on …` message, the docs site is available at [http://localhost:8888](http://localhost:8888). The entry URL is also written to `tmp/dev-url`.

> Note: By default, some page generation is skipped for performance reasons. To generate the entire site locally, go to `jekyll-dev.yml` in the root of the repo and comment out the entire `skip` section.
