---
repo: "yiipress/engine"
name: "engine"
description: "Static website builder engine powered by Yii3"
readmeQualityOk: true
url: "https://github.com/yiipress/engine"
homepage: "https://yiipress.yiiframework.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [94]
topics: ["blog", "yii3", "content", "static", "php"]
stars: 26
forks: 4
openIssues: 5
closedIssues: 42
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2023-03-14T09:28:10Z"
lastCommitAt: "2026-08-31T09:59:37Z"
lastReleaseAt: "2026-06-10T22:40:12Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 71
maintainers: ["samdark", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b49ae41f2ab32b003d39000e9bd667a349327736aca3df41cc87c671f6547fba/yiipress/engine"
---

</a>
    <h1 align="center">YiiPress Static Website Engine</h1>
    <br>
</p>

YiiPress is a fast, file-based static website engine powered by [Yii3](https://www.yiiframework.com/).
Write Markdown, build static HTML, and ship blogs, documentation, feeds, sitemaps, taxonomy pages, authors, search, redirects,
and assets without a database or any runtime.

## Install or update

Linux (x86-64) and macOS (Apple silicon):

```shell
curl -fsSL https://raw.githubusercontent.com/yiipress/engine/master/install.sh | sh
```

Windows (x86-64, PowerShell):

```powershell
irm https://raw.githubusercontent.com/yiipress/engine/master/install.ps1 | iex
```

Both installers verify the latest release checksum and put `yiipress` on `PATH`. Run the same command again to update it.
Set `YIIPRESS_INSTALL_DIR` to install into another directory.

Use the static binary for normal projects: it includes the runtime and native extensions, so you do not need Docker, PHP, Composer,
or a database on the machine that builds or previews the site.

## Features

- Static Linux, macOS, and Windows binaries for simple installs with no PHP runtime.
- Binary-only distroless Docker images for container-based workflows.
-…
