---
repo: "psa-systems/mokosh-apps"
name: "mokosh-apps"
description: "Mokosh (mythological/Slavic): The earth-mother goddess of weaving and women's work. Mascot: a slender figure at a loom under spring rain. Tagline: Weaves it all together."
readmeQualityOk: true
url: "https://github.com/psa-systems/mokosh-apps"
homepage: "https://msp.psa.systems/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["helpdesk", "helpdesk-system", "helpdesk-ticketing", "msp", "professional-services-automation", "psa", "rust", "rust-lang", "ticketing", "ticketing-system"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-16T18:32:48Z"
lastCommitAt: "2026-08-27T14:19:59Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 50
maintainers: ["LongNguyenThanhLe", "NiceGuyIT"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a96c6f5bfbc2aa92c3a1663cb0530eb552437ee34e7151485ce1a78d3c1208d/psa-systems/mokosh-apps"
---

# Mokosh Client

Cross-platform Dioxus client for the Mokosh Platform. It builds two ways from one source tree: a WebAssembly SPA that runs in the browser, and a native desktop application. See [docs/desktop.md](https://github.com/psa-systems/mokosh-apps/blob/HEAD/docs/desktop.md) for the desktop build.

## Tech stack

- **Dioxus 0.7** (Rust UI framework, `router` feature, plus `web` or `desktop` for the renderer)
- **wasm32-unknown-unknown** target for the SPA; the host target for the desktop app
- **Tailwind CSS v4** via Bun (`bun x @tailwindcss/cli`)
- **just** task runner
- **Docker Compose** for the dev server
- **Caddy** to serve the built bundle in production (see `oci-build/`)

## Prerequisites

Install on the host:

- [Rust](https://www.rust-lang.org/tools/install) (stable)
- `wasm32-unknown-unknown` target: `rustup target add wasm32-unknown-unknown`
- [Bun](https://bun.sh/)
- [just](https://github.com/casey/just)
- [Docker](https://docs.docker.com/engine/install/) with the Compose plugin
- [Nushell 0.112.2](https://www.nushell.sh/) (used by the `dev` and `create-release` recipes)

The dev server itself runs inside Docker, so the host does not need `dioxus-cli` installed.…
