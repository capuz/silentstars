---
repo: "nirally/Vitox"
name: "Vitox"
description: "PlayStation Vita runtime for Xbox Series X|S (Vita3K core, UWP)"
readmeQualityOk: true
url: "https://github.com/nirally/Vitox"
language: "C++"
languages: ["C++"]
languagePcts: [62]
topics: ["emulator", "homebrew", "mesa", "playstation-vita", "uwp", "vita3k", "xbox-dev-mode", "xbox-series-s", "xbox-series-x", "xbox-series-x-games"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-11-05T10:04:11Z"
lastCommitAt: "2026-11-07T22:50:49Z"
lastReleaseAt: "2026-11-05T17:26:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 21
maintainers: ["nirally"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe710dc614013aab081ade1b0a7993fb358501d6607ee62707936dcd00dff6c/nirally/Vitox"
---

# Vitox

**Vitox** is a PlayStation Vita runtime for the **Xbox Series X|S** (Developer Mode). It packages the
[Vita3K](https://github.com/Vita3K/Vita3K) emulator core as a UWP app with a console-friendly library
launcher, so commercial Vita games and homebrew can be installed from a USB drive and played on an Xbox.

> **Alpha (version 0.1).** Vitox is in alpha and will keep getting updates. Not every game runs correctly yet, so
> expect bugs and games that do not start. If you find a bug, please report it in
> [Issues](https://github.com/nirally/Vitox/issues) (game name, title ID and what happened) so it can be fixed.
> Download the latest build (`vitox-alpha.zip`) from [Releases](https://github.com/nirally/Vitox/releases).

---

## The launcher

The library shows every installed game with its artwork. Press **A** to start a game, **Menu** for per-game
options, **RB** for Settings, and the **+** tile to install games from a USB drive. In game, press **R3** for
the Vitox quick menu, and **L3** to show a cursor that simulates the Vita's touch screen.

## Highlights

- **Vita3K core on Xbox UWP**: the upstream Vita3K core (CPU via Dynarmic JIT, HLE modules, GXM renderer) runs…
