---
repo: "fusedio/fused-render"
name: "fused-render"
description: "Local file explorer with Python-interactive HTML views"
readmeQualityOk: true
url: "https://github.com/fusedio/fused-render"
homepage: "https://render.fused.io"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [60, 22]
stars: 11
forks: 0
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-07-06T10:49:12Z"
lastCommitAt: "2026-08-28T12:23:07Z"
lastReleaseAt: "2026-07-17T14:37:54Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["vasu2001", "AkshilVT", "iamsdas"]
openGraphImageUrl: "https://opengraph.githubassets.com/f838382525b2bdc087ab87c3acba6460a6206d4b81cc40acbdb880c2013d37bb/fusedio/fused-render"
---

# fused-render

**[Download for macOS, Windows, and Linux →](https://render.fused.io)**

A local file explorer for your whole computer. Browse any directory in the
browser, preview files, and author your own interactive views: any `.html`
file you open gets a tiny injected runtime that can call a Python `main()`
function and sync its state to the URL.

Runs entirely on `127.0.0.1`. No accounts, no cloud, no sandboxing — your own
machine, your own trusted code. See `SPEC.md` / `ARCHITECTURE.md` / `DECISIONS.md`
for the full design.

Right-click a file in Explorer → **Open with** → fused-render, and it opens in
your browser. See [Windows: Explorer "Open with"](#windows-explorer-open-with)
to enable it.

## Install

**macOS app** — the packaged FusedRender.app (bundles the `fused` CLI and
rclone; no Python required):

```
brew install --cask fusedio/tap/fused-render
```

or download the DMG from the [releases page](https://github.com/fusedio/fused-render/releases).

**Python package** — each release also attaches a wheel (see the release
notes for its URL): `pip install <wheel-url>`. From a source checkout:

```
pip install -e .
```

Requires Python 3.11+. Installs FastAPI, uvicorn,…
