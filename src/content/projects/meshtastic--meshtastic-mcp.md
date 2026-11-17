---
repo: "meshtastic/meshtastic-mcp"
name: "meshtastic-mcp"
description: "MCP server + agent skills for AI tooling to discover, drive, observe, and test Meshtastic devices and apps"
readmeQualityOk: true
url: "https://github.com/meshtastic/meshtastic-mcp"
homepage: "https://pypi.org/project/meshtastic-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 23
forks: 9
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 27
recentReleases: 1
createdAt: "2026-06-25T15:58:43Z"
lastCommitAt: "2026-11-17T12:16:08Z"
lastReleaseAt: "2026-11-17T12:08:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 49
maintainers: ["jamesarich", "bruschill", "thebentern"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b5518e77d9309f544cd1a0d7a826eb1ae432f37b45931670cc800f3c5c77ee9/meshtastic/meshtastic-mcp"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/meshtastic"]
---

# meshtastic-mcp

A home for AI tooling to **discover, drive, observe, and test** Meshtastic devices and the
apps that talk to them. An [MCP](https://modelcontextprotocol.io) server plus a bundled
agent skill set for closed-loop device ↔ app end-to-end testing.

> Extracted and decoupled from the Meshtastic firmware repo's `mcp-server/` so it can be
> installed and distributed on its own. The firmware-build tools become an optional
> capability that lights up only when a firmware checkout is present.

## Quick start (60 seconds)

Plug in a Meshtastic device, then:

```bash
uvx meshtastic-mcp doctor          # check what's available
```

Inside Claude Code (or any MCP client registered with `meshtastic`):

```
list_devices()                          → find your device port
device_info(port="/dev/cu.usbmodem101") → firmware, region, node count
list_nodes(port="/dev/cu.usbmodem101")  → mesh peers
set_debug_log_api(port="/dev/cu.usbmodem101", enabled=True)
send_text(port="/dev/cu.usbmodem101", text="hello mesh", wait_for_tx=True)  → tx_confirmed
```

A node never sees its own transmission on the receive path, so `packets_window` cannot confirm a
local send; `wait_for_tx=True` reads…
