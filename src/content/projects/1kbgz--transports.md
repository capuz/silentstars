---
repo: "1kbgz/transports"
name: "transports"
description: "Generic communication library"
url: "https://github.com/1kbgz/transports"
homepage: "https://1kbgz.github.io/transports/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [66, 23]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2023-03-23T20:26:02Z"
lastCommitAt: "2026-06-25T02:06:40Z"
lastReleaseAt: "2026-06-20T14:47:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 92
maintainers: ["timkpaine", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/57ca0454beebeebb283e532d8c6665410a59ac3bd7ec3b7a06162356fe62f322/1kbgz/transports"
---

# transports

Move typed models across any wire as incremental patches.

Define a model once as a [pydantic](https://docs.pydantic.dev) model, stdlib `dataclass`, or
[msgspec](https://jcristharif.com/msgspec/) struct. Host it in Python, mutate it normally, and send
only the patch needed to update a remote mirror. The same Rust core drives Python (PyO3) and
JavaScript (wasm), so both sides use the same `Value`, diff, patch, and codec machinery.

```python
import transports
from pydantic import BaseModel

class Device(BaseModel):
    name: str
    on: bool = False

session = transports.Session()
lamp = Device(name="lamp")
model_id = session.host(lamp)

lamp.on = True
print(session.drain())
# [(1, {'rev': 1, 'ops': [{'Set': {'path': [{'Key': 'on'}], 'value': {'Bool': True}}}]})]
```

## Install

```bash
pip install transports
pip install "transports[connections]"   # WebSocket server/client adapters
pip install "transports[sse]"           # Server-Sent Events adapter
pip install "transports[jupyter]"       # Jupyter comm adapter
```

## Documentation

### Tutorial

[Quickstart](docs/src/quickstart.md) builds one hosted model and mirrors it with the in-process
server/client protocol.…
