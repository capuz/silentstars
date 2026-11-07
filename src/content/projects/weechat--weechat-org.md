---
repo: "weechat/weechat.org"
name: "weechat.org"
description: "Source code of weechat.org."
readmeQualityOk: true
url: "https://github.com/weechat/weechat.org"
homepage: "https://weechat.org/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [70, 26]
topics: ["weechat", "site", "python", "django"]
stars: 53
forks: 22
openIssues: 4
closedIssues: 21
watchers: 10
contributors: 13
recentReleases: 0
createdAt: "2014-03-28T06:52:44Z"
lastCommitAt: "2026-11-07T09:30:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 56
maintainers: ["flashcode", "soltysek", "weechatter"]
openGraphImageUrl: "https://opengraph.githubassets.com/016f8ef82fc8606f45ca54d6463de96fc1bc876a5a98a5ccac34b26442a8cbbe/weechat/weechat.org"
---

# WeeChat.org

WeeChat.org is the website for WeeChat, the extensible chat client.

Homepage: [https://weechat.org/](https://weechat.org/)

## Install

### Dependencies

The following packages are **required**:

- python ≥ 3.11
- [uv](https://docs.astral.sh/uv/)
- PostgreSQL (with libpq development files, needed to build psycopg2).

The Python dependencies are installed by uv in a virtual environment
(directory `.venv`), using the file `uv.lock`.

### Deploy

Run the install script (it installs Python dependencies with uv):

```bash
./bin/install.sh
```

Run Django server:

```bash
./test.sh
```

And just point your browser on [http://127.0.0.1:8000/](http://127.0.0.1:8000/), that's all!

> [!IMPORTANT]
> Default settings can be used for testing purposes but must be overridden for production,
see the file [settings_local.template](https://github.com/weechat/weechat.org/blob/HEAD/weechat/settings_local.template) for more information.

## Copyright

Copyright © 2003-2026 [Sébastien Helleu](https://github.com/flashcode)

This file is part of WeeChat.org.

WeeChat.org is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as…
