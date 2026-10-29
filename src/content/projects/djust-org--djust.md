---
repo: "djust-org/djust"
name: "djust"
description: "Phoenix LiveView-style reactive server-side rendering for Django with Rust-powered performance"
readmeQualityOk: true
url: "https://github.com/djust-org/djust"
homepage: "https://djust.org"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["django", "htmx-alternative", "liveview", "pwa", "python", "reactive", "real-time", "rust", "server-side-rendering", "websocket"]
stars: 101
forks: 10
openIssues: 14
closedIssues: 1648
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-01-16T14:49:01Z"
lastCommitAt: "2026-10-29T14:07:13Z"
lastReleaseAt: "2026-01-29T02:28:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 42
maintainers: ["johnrtipton", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f40428771486d2b93704470b8c79fbfaa506637bff4281c75daea6026054be89/djust-org/djust"
discussionCount: 5
---

djust brings Phoenix LiveView-style reactive views to Django. You write
server-side Python; the browser updates itself over a WebSocket. There is no
JavaScript to write, no bundler, and no build step in your project.

**[djust.org](https://djust.org)** · **[Documentation](https://docs.djust.org)** · **[Quick Start](https://docs.djust.org/getting-started/)** · **[Examples](https://djust.org/examples/)**

```python
from djust import LiveView, event_handler

class CounterView(LiveView):
    template = """
    <div dj-root>
        <h1>Count: {{ count }}</h1>
        <button dj-click="increment">+</button>
        <button dj-click="decrement">-</button>
    </div>
    """

    def mount(self, request, **kwargs):
        self.count = 0

    @event_handler
    def increment(self):
        self.count += 1  # the page updates; no JavaScript

    @event_handler
    def decrement(self):
        self.count -= 1
```

## Why djust

- **One codebase.** Views, state and event handlers are Python. No API layer, no frontend build.
- **Small wire traffic.** A Rust virtual DOM diffs each render and sends only the changed patches.
- **Fast templates.** A Rust template engine renders Django templates…
