---
repo: "grelinfo/grelmicro"
name: "grelmicro"
description: "Keep your async Python service correct on more than one replica: scheduled jobs, locks, rate limits and circuit breakers on Redis, PostgreSQL or SQLite. FastAPI, Litestar, FastStream."
readmeQualityOk: true
url: "https://github.com/grelinfo/grelmicro"
homepage: "https://grelmicro.grel.info"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["fastapi", "faststream", "leader-election", "python", "asyncio", "circuit-breaker", "resilience", "cache", "cron", "distributed-lock"]
stars: 5
forks: 0
openIssues: 55
closedIssues: 338
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-21T04:31:31Z"
lastCommitAt: "2026-11-02T10:25:35Z"
lastReleaseAt: "2026-03-17T16:38:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 81
maintainers: ["grelinfo", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/875906397/87797c57-2642-4e72-ac92-9d749dcf3d01"
discussionCount: 0
postedAt: "2026-10-23T08:52:59.686Z"
---

Run a second copy of your app and things break quietly. The cron job runs twice. The rate limit lets through twice the traffic. One replica keeps calling a dead service the other already gave up on.

grelmicro fixes that with one line that says where shared state lives: Redis, Valkey, PostgreSQL or SQLite. Works with FastAPI, Starlette, Litestar and FastStream. Python 3.14+.

```bash
pip install "grelmicro[fastapi,redis]"
```

______________________________________________________________________

**Documentation**: [https://grelmicro.grel.info/](https://grelmicro.grel.info)

**Source Code**: [https://github.com/grelinfo/grelmicro](https://github.com/grelinfo/grelmicro)

______________________________________________________________________

## Start with one pattern

Run a task once a minute across all your replicas, not once per replica. Create a file `main.py` with:

```python
from fastapi import FastAPI

from grelmicro import Grelmicro
from grelmicro.providers.redis import RedisProvider
from grelmicro.task import Tasks

app = FastAPI()
tasks = Tasks()
micro = Grelmicro(uses=[RedisProvider("redis://localhost:6379/0"), tasks])
micro.install(app)

@tasks.every(interval=60,…
