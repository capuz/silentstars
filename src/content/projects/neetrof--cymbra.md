---
repo: "NEETROF/cymbra"
name: "cymbra"
description: "Cymbra — open-source interactive music suite (Flutter + Rust). Apache-2.0."
readmeQualityOk: true
url: "https://github.com/NEETROF/cymbra"
language: "Rust"
languages: ["Rust", "TypeScript", "Dart"]
languagePcts: [33, 25, 23]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-21T17:31:24Z"
lastCommitAt: "2026-10-26T20:59:32Z"
lastReleaseAt: "2026-07-08T11:46:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["Guillaume-Fortin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a566c583e48ed68bd87fe998a1c2d1bb143352d20fe14b69f034814fd451cd8d/NEETROF/cymbra"
---

# Cymbra

Open-source suite around an interactive music engine — Flutter (UI) + Rust (engine),
bridged with [flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge).
Free and open source under the [Apache License 2.0](https://github.com/NEETROF/cymbra/blob/HEAD/LICENSE).

> Brand notice: the code is open; the name **"Cymbra"** and its logo are trademarks of
> **NEETROF** and are not licensed (Apache 2.0 §6). See [TRADEMARKS.md](https://github.com/NEETROF/cymbra/blob/HEAD/TRADEMARKS.md).

## Monorepo layout

```
apps/            # deployable apps
  music/         # Cymbra Music — Flutter + Rust (desktop / Android / iOS)
  back-office/   # moderation & admin console — Vue 3 (bo.cymbra.app)
  site/          # public web site — Astro (cymbra.app): showcase, legal, web sign-in,
                 # code redemption, checkout, subscription management
crates/          # shared pure-Rust libraries (the common engine)
packages/        # shared Dart/Flutter packages (flags client, …)
backend/         # pure-Rust modular-monolith backend
```

The taxonomy is **deployable vs shared**, per ecosystem:

|        | Deployable | Shared library |
|--------|------------|----------------|
|…
