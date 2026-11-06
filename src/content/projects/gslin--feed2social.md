---
repo: "gslin/feed2social"
name: "feed2social"
description: "Sync feed to social networks."
readmeQualityOk: true
url: "https://github.com/gslin/feed2social"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["bluesky", "facebook", "feed", "plurk", "rss", "threads"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-07-03T06:30:44Z"
lastCommitAt: "2026-11-06T02:43:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["gslin"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fb3872ffeb752d5b1e3eb3d0070f6a3f8b35a0fae2dbc8de7651f2caeff34bb/gslin/feed2social"
---

# feed2social

Sync feed to social networks.

## Platforms are supported

* Bluesky
* Facebook
* Plurk
* Threads
* Twitter

## Config

The `~/.config/feed2social/config.ini` file:

```ini
[default]
bluesky_username = username.bsky.social
bluesky_password = x
facebook_username = username
feed_url = https://abpe.org/@gslin.rss
plurk_app_key = x
plurk_app_secret = x
plurk_token = x
plurk_token_secret = x
threads_access_token = x
threads_user_id = x
twitter_access_token = x
twitter_access_token_secret = x
twitter_api_key = x
twitter_api_key_secret = x
```

The `facebook_username` is used for generating the url `https://www.facebook.com/${facebook_username}`.

## Install

Install [uv](https://docs.astral.sh/uv/getting-started/installation/), then run
this command from the repository directory:

```bash
uv run --locked python check-env.py
```

uv installs its own Python 3.12 and creates `.venv` using the versions in
`uv.lock`. The project does not use packages installed in a global Python,
mise Python, or pyenv Python. Commit `pyproject.toml`, `uv.lock`, and
`.python-version`; `.venv` is generated locally and ignored by Git.

For a new installation, create the databases after…
