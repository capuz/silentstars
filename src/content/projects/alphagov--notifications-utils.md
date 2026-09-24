---
repo: "alphagov/notifications-utils"
name: "notifications-utils"
description: "Shared code between GOV.UK Notify applications"
readmeQualityOk: true
url: "https://github.com/alphagov/notifications-utils"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["govuk-notify", "government-as-a-platform"]
stars: 14
forks: 12
openIssues: 0
closedIssues: 1
watchers: 14
contributors: 39
recentReleases: 0
createdAt: "2016-01-07T12:17:46Z"
lastCommitAt: "2026-09-24T08:41:28Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 71
maintainers: ["quis", "rparke", "risicle"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d96042589a03b2896858a4fdd89b3ad0db8dc3db6cb341a6aa701e0d56056f/alphagov/notifications-utils"
---

# notifications-utils

Shared Python code for GOV.UK Notify applications. Standardises how to do logging, rendering message templates, parsing spreadsheets, talking to external services and more.

## Setting up

### Python version

This repo is written in Python 3.

### uv

We use [uv](https://github.com/astral-sh/uv) for Python dependency management. Follow the [install instructions](https://github.com/astral-sh/uv?tab=readme-ov-file#installation) or run:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Pre-commit

We use [pre-commit](https://pre-commit.com/) to ensure that committed code meets basic standards for formatting, and will make basic fixes for you to save time and aggravation.

Install pre-commit system-wide with, eg `brew install pre-commit`. Then, install the hooks in this repository with `pre-commit install --install-hooks`.

### Redis

We use a real [Redis](https://redis.io/) instance to test `notifications_utils.redis_client.RedisClient`. You can either [install locally with brew](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-mac-os/) or [run inside a docker…
