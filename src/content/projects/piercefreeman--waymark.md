---
repo: "piercefreeman/waymark"
name: "waymark"
description: "🧭 Distributed background workflows, durably executed"
readmeQualityOk: true
url: "https://github.com/piercefreeman/waymark"
homepage: "https://waymark.sh"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [77, 21]
stars: 14
forks: 3
openIssues: 67
closedIssues: 30
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-16T18:34:43Z"
lastCommitAt: "2026-10-03T09:23:05Z"
lastReleaseAt: "2025-12-12T01:30:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 57
maintainers: ["MOZGIII"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9c5ce26beebacc077705887b552a5168aaf1156f39d3043078560a7c041585c/piercefreeman/waymark"
---

# waymark

waymark is a library to let you build durable background tasks that withstand server restarts, task crashes, and long-running jobs. It's built for Python and Postgres without any additional deploy time requirements. More languages are coming soon.

## Usage

We ship all client and server wheels as a python package. Install it via your package manager of choice:

```bash
uv add waymark
```

Once installed, Waymark exposes `waymark-start-workers` as a runnable bin entrypoint in your environment.
You can boot the worker pool directly with `uv run`:

```bash
export WAYMARK_DATABASE_URL=postgresql://postgres:postgres@localhost:5432/waymark
uv run waymark-start-workers
```

Let's say you need to send welcome emails to a batch of users, but only the active ones. You want to fetch them all, filter out inactive accounts, then fan out emails in parallel. This is how you write that workflow in waymark:

```python
import asyncio
from waymark import Depends, Workflow, action, workflow

@workflow
class WelcomeEmailWorkflow(Workflow):
    async def run(self, user_ids: list[str]) -> list[EmailResult]:
        users = await fetch_users(user_ids)
        active_users = [user for user in…
