---
repo: "alganet/lint-http"
name: "lint-http"
description: "A TLS-terminating HTTP/HTTPS forward proxy that lints traffic and writes captures. 🔧"
readmeQualityOk: true
url: "https://github.com/alganet/lint-http"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 40
forks: 1
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-27T02:55:02Z"
lastCommitAt: "2026-08-28T15:33:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 44
maintainers: ["alganet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f443508d42a765daf5f9386182a4df32c67aacff279b34ae347e1949dcfa7e0/alganet/lint-http"
fundingLinks: ["GITHUB:https://github.com/alganet", "PATREON:https://patreon.com/alganet"]
---

# lint-http

⚠️ **Early stage, experimental and incomplete.** ⚠️

**A TLS-terminating HTTP/HTTPS forward proxy that lints traffic and writes captures.** 🔧

lint-http inspects HTTP(S) traffic, runs protocol best-practice checks (rules), and writes detailed JSONL captures for debugging and analysis. It's intended as a development and testing tool — not for production use.

---

## Highlights

- TLS interception using Rust-native stacks (rustls / tokio-rustls / hyper-rustls)
- HTTP/2 and HTTP/1.1 support (via ALPN)
- JSONL traffic captures (`captures.jsonl`) with request/response metadata + timing
- Configurable, stateful lint rules (enable/disable via TOML)
- Easy to use with curl, browsers, and other HTTP clients

## Quick start — run locally

1) Build and run (recommended for development):

```bash
cargo run -- run --config config_example.toml
```

2) Basic HTTP usage:

```bash
# use the proxy (example listens on 127.0.0.1:3000)
curl -x http://localhost:3000 http://example.com
```

3) HTTPS interception (trust the generated CA locally):

```bash
# Download the CA cert exposed by the running proxy
curl http://localhost:3000/_lint_http/cert > lint-http-ca.crt
# Tell your client to…
