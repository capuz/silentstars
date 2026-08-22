---
repo: "brues-code/ClassicAPI"
name: "ClassicAPI"
description: "DLL for 1.12.1 to backport the modern Blizzard API"
readmeQualityOk: true
url: "https://github.com/brues-code/ClassicAPI"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 30
forks: 10
openIssues: 3
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-08T00:23:21Z"
lastCommitAt: "2026-08-22T04:06:02Z"
lastReleaseAt: "2026-05-31T02:48:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 48
maintainers: ["brues-code", "fuffc", "peterkmg"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc62beb2f386be4e9409e58701982d114c6e0326b0413db3b42c4517db0707e8/brues-code/ClassicAPI"
discussionCount: 0
---

# ClassicAPI

A small DLL for World of Warcraft 1.12.1 (Vanilla / Turtle WoW) that adds a
collection of Lua API calls Blizzard never exposed in 1.12 but which make
addon authoring noticeably less painful — primarily for backporting addons
written against later API versions (3.3.5+) where these calls do exist.

The DLL hooks the FrameScript engine after WoW boots and registers its
extensions through the same in-engine mechanisms WoW uses for its own Lua
functions. No companion addon is required.

## What's added

Full per-function reference: **[docs/API.md](https://github.com/brues-code/ClassicAPI/blob/HEAD/docs/API.md)**.

### Calls

| Namespace | Calls |
|-----------|-------|
| [Action](https://github.com/brues-code/ClassicAPI/blob/HEAD/docs/API.md#action) | `GetActionInfo` |
| [AddOns](https://github.com/brues-code/ClassicAPI/blob/HEAD/docs/API.md#addons) | `C_AddOns.DoesAddOnExist`, `C_AddOns.GetAddOnLocalTable`, `C_AddOns.GetAddOnName`, `C_AddOns.GetAddOnNotes`, `C_AddOns.GetAddOnOptionalDependencies`, `C_AddOns.GetAddOnSecurity`, `C_AddOns.GetAddOnTitle`, `C_AddOns.IsAddOnLoadable`, `C_AddOns.IsAddOnLoaded` |
|…
