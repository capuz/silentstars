---
repo: "halfwhey/nix-playwright-nightly"
name: "nix-playwright-nightly"
description: "Pure-Nix flake packaging @playwright/cli, @playwright/mcp, and PyPI playwright with revision-matched browsers. Also packages Camoufox."
readmeQualityOk: true
url: "https://github.com/halfwhey/nix-playwright-nightly"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [50, 50]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-09T15:02:43Z"
lastCommitAt: "2026-07-10T06:59:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 40
maintainers: ["halfwhey", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/521c33369b8b366339d838818ade8ec3cdef3fe8e97bd00ae30e8f3063a0f920/halfwhey/nix-playwright-nightly"
---

# nix-playwright-nightly

Nix flake packaging `@playwright/cli`, `@playwright/mcp`, Node.js `playwright`, .NET `Microsoft.Playwright`, and PyPI `playwright`, each bundled with the exact browser revisions its `playwright-core` requires. No runtime downloads, no `PLAYWRIGHT_BROWSERS_PATH` wiring needed.

It also packages PyPI `camoufox` bundled with the current Camoufox browser, independent of the Playwright browser sets.

Supported systems: `x86_64-linux`, `aarch64-linux`, `aarch64-darwin`.

Camoufox is currently available on `aarch64-linux`.

## Why

`@playwright/cli`, `@playwright/mcp`, Node.js `playwright`, .NET `Microsoft.Playwright`, and PyPI `playwright` release independently and regularly pin different `playwright-core` versions at the same moment. nixpkgs's `playwright-driver.browsers` almost never matches any of them. This flake builds a separate browser set per consumer and bakes the right one into each wrapper.

Refer to [pin.json](https://github.com/halfwhey/nix-playwright-nightly/blob/main/pins/pin.json) for the current version of each package.

## Usage

Add the input:

```nix
inputs.playwright.url = "github:halfwhey/nix-playwright-nightly";
```

Version segments use…
