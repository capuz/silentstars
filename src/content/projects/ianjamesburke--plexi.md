---
repo: "ianjamesburke/PLEXI"
name: "PLEXI"
description: "Your terminal's dad"
url: "https://github.com/ianjamesburke/PLEXI"
homepage: "https://www.plexiapp.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 10
forks: 3
openIssues: 1
closedIssues: 1226
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-13T21:38:23Z"
lastCommitAt: "2026-06-25T01:37:42Z"
lastReleaseAt: "2026-06-25T01:37:58Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 61
maintainers: ["ianjamesburke"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae9e6514914b5b2a7e1096f36323200a9293e8d77b429e7030bf3292c04c27e7/ianjamesburke/PLEXI"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/ianjamesbu8"]
---

<h1 align="center"> under construction </h1>

> **Pre-release:** Plexi is pre-v1 and under active development. APIs, config format, and behavior may change without notice. The version will be reverted to v0 to reflect this.

</p>

<h1 align="center">plexi</h1>

</p>

Started as a terminal multiplexer. Got carried away. Now it's closer to a micro operating system — file explorer, notes editor, agent hooks, app runtime/SDK, notifications, and probably more I'm forgetting. Built in Rust.

---

## Contact

If you run into any issues, don't hesitate to reach out directly: adhdisntreal@gmail.com

---

## Install

> **macOS only.** Linux is untested.

### One-liner

```bash
curl -fsSL https://plexiapp.com/install | sh
```

Downloads the latest release, installs to `/Applications`, sets up the `plexi` CLI, and wires ZSH integration. Restart your terminal when done.

To install a pre-release channel, pass `--channel`:

```bash
curl -fsSL https://plexiapp.com/install | bash -s -- --channel beta
curl -fsSL https://plexiapp.com/install | bash -s -- --channel alpha
```

**First launch (unsigned app):** macOS may block it on first open.
- **macOS 15+:** System Settings → Privacy & Security →…
