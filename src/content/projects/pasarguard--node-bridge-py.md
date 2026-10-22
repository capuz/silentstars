---
repo: "PasarGuard/node_bridge_py"
name: "node_bridge_py"
description: "Library to connect and use PasarGuard Node"
readmeQualityOk: true
url: "https://github.com/PasarGuard/node_bridge_py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 15
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2025-02-11T11:01:31Z"
lastCommitAt: "2026-10-22T08:52:09Z"
lastReleaseAt: "2025-03-09T13:50:35Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 63
maintainers: ["M03ED", "ImMohammad20000", "T3ST3ST3R0N"]
openGraphImageUrl: "https://opengraph.githubassets.com/aed8e738ece7169d53cf6bc29cc9d049ccc15fde5d7ba9a269ee5892d71d0a65/PasarGuard/node_bridge_py"
---

# PasarGuard Node Bridge (Python)

Async Python client for connecting to a [PasarGuard node](https://github.com/PasarGuard/node) over `gRPC` or `REST`.

This package provides:
- Strongly typed protobuf models (`service_pb2`)
- Unified node API for both transport types
- User sync helpers (single, batch, and chunked streaming)
- Health/version helpers
- On-demand log streaming
- Node maintenance endpoints (update core/node/geofiles)

## Installation

```bash
pip install pasarguard-node-bridge
```

## Requirements

- Python `>=3.12`
- A reachable PasarGuard node
- Node service port (`port`) for gRPC or protobuf-REST
- Node JSON API port (`api_port`) for maintenance endpoints
- Server CA certificate content (PEM string)
- API key (UUID string)

## Import

```python
import PasarGuardNodeBridge as Bridge
from PasarGuardNodeBridge.common import service_pb2 as service
```

## Create A Node Client

```python
node = Bridge.create_node(
    connection=Bridge.NodeType.grpc,  # Bridge.NodeType.grpc or Bridge.NodeType.rest
    address="127.0.0.1",
    port=2096,                         # gRPC or protobuf-REST port (based on connection)
    api_port=2097,                     # REST JSON API…
