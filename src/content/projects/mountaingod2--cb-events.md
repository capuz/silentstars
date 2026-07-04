---
repo: "MountainGod2/cb-events"
name: "cb-events"
description: "Async Python client for the Chaturbate Events API"
url: "https://github.com/MountainGod2/cb-events"
homepage: "https://mountaingod2.github.io/cb-events/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["api", "chaturbate", "events", "longpoll", "async", "asyncio", "chaturbate-api", "python", "python3-library"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-26T01:43:40Z"
lastCommitAt: "2026-07-04T06:11:56Z"
lastReleaseAt: "2025-09-07T17:54:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 57
maintainers: ["renovate[bot]", "MountainGod2", "cb-events-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ba161b45166e16c82812640af25c9cc13fb350496e8d288a682f9b29d9b08fc/MountainGod2/cb-events"
---

# cb-events

Async Python client for the Chaturbate Events API.

Provides event polling, typed models, retries, and routing.

## Requirements

Python 3.10+

## Installation

```bash
pip install cb-events
```

With [uv](https://docs.astral.sh/uv/):

```bash
uv add cb-events
```

## Quick Start

```python
import asyncio
from cb_events import Event, EventClient, EventType, Router

router = Router()

events_url = "https://eventsapi.chaturbate.com/events/your_username/your_api_token/"

@router.on(EventType.TIP)
async def handle_tip(event: Event) -> None:
    if event.user and event.tip:
        print(f"{event.user.username} tipped {event.tip.tokens} tokens")

async def main() -> None:
    async with EventClient(events_url) as client:
        async for event in client:
            await router.dispatch(event)

asyncio.run(main())
```

> [!NOTE]
> Create an API token at https://chaturbate.com/statsapi/authtoken/ with Events API scope.
> You can create multiple tokens. Deleting a token revokes its access within up to one minute.

## Features

- Async iterator client for long-polling events.
- Typed event models for tips, chat/messages, follows, broadcasts, and other event types.
- Router…
