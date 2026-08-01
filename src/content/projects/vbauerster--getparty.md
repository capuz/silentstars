---
repo: "vbauerster/getparty"
name: "getparty"
description: "HTTP Download Manager with multi-parts"
readmeQualityOk: true
url: "https://github.com/vbauerster/getparty"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "download-manager", "terminal", "downloader", "cli"]
stars: 114
forks: 15
openIssues: 3
closedIssues: 22
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2016-12-28T06:49:36Z"
lastCommitAt: "2026-08-01T04:46:21Z"
lastReleaseAt: "2017-04-09T18:48:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 33
maintainers: ["vbauerster"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2751b512cce5a0c41be41dad24f5d24d1e1dbfef061c703db3bf596bcc812a5/vbauerster/getparty"
---

# getparty

HTTP Download Manager with multi-parts

## Installation

#### Homebrew

```
$ brew tap vbauerster/getparty
$ brew install getparty
```

#### [AUR](https://wiki.archlinux.org/title/AUR_helpers)

```
$ paru -S getparty
```

#### From source

```
$ git clone --depth 1 https://github.com/vbauerster/getparty.git
$ cd getparty/cmd/getparty && go build
```

## Usage

```
Usage:
  getparty [OPTIONS] [<url>]

Application Options:
  -p, --parts=n                                    number of parts (default: 1)
  -r, --max-retry=n                                max retries per each part, 0 for infinite (default: 10)
      --max-redirect=n                             max redirections allowed, 0 for infinite (default: 10)
  -t, --timeout=sec                                initial timeout to fill a buffer (default: 10)
  -b, --buf-size=KiB[2|4|8|16]                     buffer size, prefer smaller for slow connection (default: 8)
  -l, --speed-limit=[1|2|3|4|5]                    speed limit (default: 0 = no limit; 5 = max limit)
  -s, --session=FILE                               auto saved json file of previous incomplete download session
  -U,…
