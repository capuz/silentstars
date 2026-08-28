---
repo: "pnpm/setup"
name: "setup"
description: "Install pnpm and a JavaScript runtime (Node.js, Bun, or Deno) in one GitHub actions step"
readmeQualityOk: true
url: "https://github.com/pnpm/setup"
homepage: "https://pnpm.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 96
forks: 13
openIssues: 17
closedIssues: 2
watchers: 0
contributors: 43
recentReleases: 4
createdAt: "2026-05-11T15:06:21Z"
lastCommitAt: "2026-08-28T14:23:17Z"
lastReleaseAt: "2026-08-09T22:08:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 19
maintainers: ["zkochan", "Stanzilla", "urban-adeininger"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b2773e69c93f282f8dad299932088c49ceae64ffe34f364bfd8ff578be70255/pnpm/setup"
---

# Setup pnpm with runtime

Install pnpm **and** a JavaScript runtime (Node.js, Bun, or Deno) in a single GitHub Actions step.

pnpm ships a self-contained release binary — the action downloads it for the runner's platform from the npm registry, refusing anything whose npm signature or checksum does not check out (no Node.js or npm needed) and then uses `pnpm runtime set` to install the requested runtime. The runtime binary is placed on `PATH` for subsequent steps, replacing the need for `actions/setup-node`, `oven-sh/setup-bun`, or `denoland/setup-deno`. `pnpm install` runs automatically when a `package.json` is present.

> [!NOTE]
> `pnpm/setup@v2` installs pnpm v11 and newer only — it relies on pnpm's self-contained release binaries and the `pnpm runtime` command, both available from v11. `v1` installed pnpm through npm and could set up pnpm 10; if you need pnpm 10 or older, use [`pnpm/action-setup`](https://github.com/pnpm/action-setup) instead.
>
> One caveat: pnpm v11 publishes no binary for Intel macOS (`darwin-x64`); use v12 or newer on Intel macOS runners.

If your `package.json` declares `devEngines.runtime`, the action picks up the runtime and version from there…
