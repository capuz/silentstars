---
repo: "superfly/sprites-py"
name: "sprites-py"
description: "Python SDK for Fly.io Sprites: computers for agents. Sprite management, remote command execution, filesystems, checkpoints, services, and network policy from Python."
readmeQualityOk: true
url: "https://github.com/superfly/sprites-py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-sandbox", "ai-agents", "development-environments", "fly-io", "python", "python-sdk", "remote-execution", "sdk", "sprites"]
stars: 21
forks: 4
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-01-07T14:02:37Z"
lastCommitAt: "2026-08-27T14:32:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 43
maintainers: ["aezell", "kcmartin", "kylemclaren"]
openGraphImageUrl: "https://opengraph.githubassets.com/26f06fe5b965fead67f4c2ade2bcf215460e168abba79461fdb94aa1785e71cd/superfly/sprites-py"
---

# Sprites Python SDK

Python SDK for [Sprites](https://sprites.dev), providing sprite management,
remote command execution, filesystem access, checkpoints, services, and network
policy controls.

## Installation

```bash
pip install sprites-py
```

## Quick Start

```python
import os

from sprites import SpritesClient

client = SpritesClient(token=os.environ["SPRITE_TOKEN"])
sprite = client.create_sprite(os.environ["SPRITE_NAME"])

# Run a command
result = sprite.run("echo", "hello", capture_output=True)
print(result.stdout.decode())  # "hello\n"

# Or use the Go-style API
cmd = sprite.command("ls", "-la")
output = cmd.output()
print(output.decode())

sprite.destroy()
```

## API Overview

### SpritesClient

```python
from sprites import ListOptions, SpritesClient, URLSettings

client = SpritesClient(
    token="your-token",
    base_url="https://api.sprites.dev",  # optional
    timeout=30.0,  # optional
    control_mode=False,  # optional multiplexed exec transport
)

# Create a sprite
sprite = client.create_sprite(
    "my-sprite",
    url_settings=URLSettings(auth="sprite", private_access="admins"),
    labels=["dev"],
    wait_for_capacity=True,
    runtime="dev",
)

# Get a…
