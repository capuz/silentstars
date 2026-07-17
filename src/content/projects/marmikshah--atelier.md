---
repo: "marmikshah/atelier"
name: "atelier"
description: "The pixel-art studio agents can see — layered, animated, game-ready art over MCP. One binary, no keys, fully deterministic."
readmeQualityOk: true
url: "https://github.com/marmikshah/atelier"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["claude", "kimi", "mcp", "pixel", "pixel-art", "retro", "ai-agents", "game-assets", "gamedev", "mcp-server"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-07T04:00:10Z"
lastCommitAt: "2026-07-17T05:58:15Z"
lastReleaseAt: "2026-07-16T01:01:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 64
maintainers: ["marmikshah"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe1e7232ef546b3f09c8d15a18dc0f56f7f51b84b05136f2f0c384d8839422e/marmikshah/atelier"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="site/assets/logo-wordmark-dark.png">
  </picture>
</p>

Layered, animated, game-ready art — over MCP.</p>

</p>

</p>

</p>

---

## Install

```sh
curl -fsSL https://marmikshah.github.io/atelier/install.sh | sh
```

Installs the binary, starts a background daemon, and prints the one line that
registers it with your MCP client. Restart the client, then just ask:

> *"draw me a blinking cat sprite and export it as a GIF"*

  <code>doc_create</code> → <code>paint</code> → <b><code>doc_look</code></b> → <i>fix</i> → <code>doc_export</code>
</p>

### Docker

Prefer a container? The image serves the same HTTP MCP endpoint:

```sh
docker run -d -p 127.0.0.1:8765:8765 -v atelier-data:/data ghcr.io/marmikshah/atelier
claude mcp add --scope user --transport http atelier http://127.0.0.1:8765/mcp
```

Multi-arch (amd64 + arm64). Documents persist in the `atelier-data` volume, so
they survive restarts. There's a [`docker-compose.yml`](https://github.com/marmikshah/atelier/blob/HEAD/docker-compose.yml) if
you'd rather keep it declarative.

### Other ways

- **Binaries** — macOS (ARM), Linux x86_64, Windows: [latest…
