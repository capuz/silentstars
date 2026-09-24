---
repo: "profullstack/hqtui"
name: "hqtui"
description: "High Quality Terminal UI for TypeScript — btop-grade terminal dashboards with a one-import API, dark by default, zero runtime dependencies."
readmeQualityOk: true
url: "https://github.com/profullstack/hqtui"
homepage: "https://hqtui.com"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [27, 20]
stars: 301
forks: 20
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-08-30T05:09:53Z"
lastCommitAt: "2026-09-24T08:41:25Z"
lastReleaseAt: "2026-09-13T07:16:05Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 33
maintainers: ["ralyodio", "anjaustin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/094ad2ec1f17f239e1678a93bac131432f3e8f0ca3fe8aac0d7008e1f902db01/profullstack/hqtui"
---

</p>
btop-grade dashboards with a one-import API, dark by default, zero runtime dependencies.<br>
TypeScript, Rust, Go, Python, Zig, C++, Ruby, PHP and Perl.</p>
</p>
</p>
</p>

Run it yourself on whichever runtime you already have:

```bash
bunx @profullstack/hqtui-demo                    # Bun
npx  @profullstack/hqtui-demo                    # Node 22.6+
deno run -A npm:@profullstack/hqtui-demo         # Deno 2
```

The same ten-screen demo runs natively in eight other languages, one command
each and no checkout: see [See it running](#see-it-running).

Add `--sim` to any of them for a deterministic simulation instead of your real machine.

---

## Why

Terminal apps do not have to look like 1990s ncurses software. HQTUI owns the terminal
directly — ANSI/VT sequences, a typed-array framebuffer, differential rendering, Braille
graphics and truecolor — so a dashboard can look and feel like a modern desktop app
while starting instantly and running fine over SSH.

No ncurses. No browser DOM. No React. No native addon. No network access. Ever.

## Install

```bash
bun  add @profullstack/hqtui        # Bun is the default runtime
npm  add @profullstack/hqtui        # Node 22.6+ works…
