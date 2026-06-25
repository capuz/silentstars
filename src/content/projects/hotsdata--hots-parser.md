---
repo: "hotsdata/hots-parser"
name: "hots-parser"
description: "A fast Heroes of the Storm replay parser written in Python"
url: "https://github.com/hotsdata/hots-parser"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["heroes-of-the-storm", "parser", "replays", "blizzard", "blizzard-games"]
stars: 12
forks: 7
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-09-17T00:40:11Z"
lastCommitAt: "2026-06-25T06:41:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 42
maintainers: ["crorella"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e0a28d5c107fb3452f761f133c96ed3016d7179c71aa065a823f58f61dd486f/hotsdata/hots-parser"
---

# hots-parser
A fast Heroes of the Storm's replay files parser written in Python.

## Python 3 quick start

This project now targets Python 3.10 or newer.

```bash
git submodule update --init --recursive
python3 -m venv .venv
.venv/bin/python -m pip install -e '.[dev]'
.venv/bin/python -m pytest -q
```

Parse a replay and dump JSON files:

```bash
.venv/bin/python main.py --dump-all --output-dir /tmp/hots-parser-output path/to/replay.StormReplay
```

The package entry point is also available:

```bash
.venv/bin/python -m hots_parser --help
```

## Golden replay tests

Private replay fixtures stay out of Git. Put local fixtures under:

```text
tests/fixtures/replays/local/
```

The current local golden replay is:

```text
tests/fixtures/replays/local/2026-06-24_15-49-48_Silver_City.StormReplay
```

Generate or refresh its ignored golden JSON payloads with:

```bash
.venv/bin/python scripts/generate_golden.py --update
```

The golden test skips on machines without the local replay or generated local golden output.

## Database configuration

Parser-only usage and JSON dumping do not require database credentials. Database writes use `HOTSDATA_DATABASE_URL` or `DATABASE_URL` when set,…
