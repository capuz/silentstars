---
repo: "ianjamesburke/PLEXI"
name: "PLEXI"
description: "Your terminal's dad"
readmeQualityOk: true
url: "https://github.com/ianjamesburke/PLEXI"
homepage: "https://www.plexiapp.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 15
forks: 4
openIssues: 1
closedIssues: 1254
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-13T21:38:23Z"
lastCommitAt: "2026-11-05T00:23:28Z"
lastReleaseAt: "2026-06-26T03:47:39Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 59
maintainers: ["ianjamesburke"]
openGraphImageUrl: "https://opengraph.githubassets.com/f80a41d49f0f25f83ab12bf8c97337acae3cfd6cf283c6699a34f7b78c792fda/ianjamesburke/PLEXI"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/ianjamesbu8"]
---

> **Pre-release:** Plexi is pre-v1 and under active development. APIs, config format, and behavior may change without notice.

Started as a terminal multiplexer. Got carried away. Now it's closer to a micro operating system — file explorer, notes editor, agent hooks, app runtime/SDK, notifications, and probably more I'm forgetting. Built in Rust.

---

## Contact

If you run into any issues, don't hesitate to reach out directly: adhdisntreal@gmail.com

---

## Install

### macOS (Apple Silicon; Intel when published)

Downloads the matching current macOS stable release. Requires `bash`, `curl`,
`tar`, and `shasum`, not Git, Rust, a package manager, or administrator access.

```bash
curl -fsSL https://plexiapp.com/install | bash
```

The installer selects the matching macOS archive. If the selected channel has
no Intel archive, it stops with a clear missing-asset error; from a checkout,
build with Rust, just, uv and Python 3.11 using `scripts/install.sh --from-source alpha`.
It verifies the release archive's SHA-256 checksum before installing it.

### Linux (x86_64, X11)

Downloads the current Linux x64 stable release. Requires `bash`, `curl`, `tar`,
and `sha256sum` (or `shasum`);…
