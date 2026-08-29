---
repo: "tina4stack/tina4-python"
name: "tina4-python"
description: "Tina4 Python"
readmeQualityOk: true
url: "https://github.com/tina4stack/tina4-python"
homepage: "https://tina4.com"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["framework", "jinja2", "migrations", "orm-framework", "python", "sockets", "swagger", "twig", "wsdl"]
stars: 18
forks: 13
openIssues: 1
closedIssues: 44
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2021-05-15T19:58:07Z"
lastCommitAt: "2026-08-29T10:21:37Z"
lastReleaseAt: "2026-04-25T09:50:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 77
maintainers: ["andrevanzuydam", "MichaelC8E"]
openGraphImageUrl: "https://opengraph.githubassets.com/452ce466480b0963ed586eebd042db03f659b517c35edbed95e86823840a171d/tina4stack/tina4-python"
---

</p>

<h1 align="center">Tina4 Python</h1>

  Zero dependencies. One import, everything works.
</p>

</p>

</p>

---

## Quick Start

```bash
# Install the Tina4 CLI
cargo install tina4  # or download binary from https://github.com/tina4stack/tina4/releases

# Create a project
tina4 init python ./my-app

# Run it
cd my-app && tina4 serve
```

Open http://localhost:7146. Your app is running.

> **Two CLIs:** `tina4` is the cross-language Rust CLI that scaffolds projects, runs the dev server, and watches files. `tina4python` is the Python package's own CLI for project tasks (`migrate`, `seed`, `generate`, `test`). This guide uses `tina4` to scaffold and run, and `tina4python` for those tasks.

<details>
<summary><strong>Without the Tina4 CLI (Docker / CI only)</strong></summary>

The framework normally refuses to start without the `tina4` Rust CLI (it owns file watching and SCSS compilation). To bypass (e.g. inside a Docker image where you've already built the assets), set `TINA4_OVERRIDE_CLIENT=true` in `.env`:

```bash
# 1. Create project
mkdir my-app && cd my-app
uv init && uv add tina4-python

# 2. Create entry point
echo 'from tina4_python.core import run; run()' > app.py

# 3.…
