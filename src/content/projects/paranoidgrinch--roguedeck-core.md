---
repo: "Paranoidgrinch/RogueDeck-Core"
name: "RogueDeck-Core"
description: "Deterministic, modular C# combat engine for roguelike deckbuilders — UI-independent, event-driven and built for extensible mechanics."
readmeQualityOk: true
url: "https://github.com/Paranoidgrinch/RogueDeck-Core"
homepage: "https://moonvineforge.com"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["card-game", "csharp", "deckbuilder", "deterministic", "dotnet", "event-driven", "game-development", "game-engine", "modular-architecture", "roguelike"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-05T15:21:01Z"
lastCommitAt: "2026-07-16T06:02:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Paranoidgrinch"]
openGraphImageUrl: "https://opengraph.githubassets.com/beaaf774694688ded42e4050f3a519128a289223d97e92edf35851298ca798e8/Paranoidgrinch/RogueDeck-Core"
---

# ⚙️ RogueDeck Core

### Build the mechanic. Keep the core clean.

A deterministic, modular C# combat engine for roguelike deckbuilders.
**Combat Engine v1 is complete and ready to embed** — strange mechanics compose *into* it instead of turning
the core into a giant switch statement.

<br>

</a>
</a>
</a>

<br><br>

</div>

---

## Why it exists

Most combat code rots the same way: every new card, relic or status teaches the *whole* engine what it is,
until the core is one enormous switch statement nobody dares to touch.

RogueDeck Core takes the opposite bet. Mechanics are **composed** from a small set of primitives on a
deterministic queue, so the hundredth mechanic is no harder to add than the first — and the same final state
is reproducible from the same seed, every time.

It is a finished, tested **engine you can use today**: drive it from your own game, script fights in code, or
design them live in the browser sandbox. It is not a game itself — it carries no rendering, input or themes,
only the reusable combat language beneath a deckbuilder.

---

## The rule above all others

> **Adding a new effect must not require changing the central resolver.**

Everything is built…
