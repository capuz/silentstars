---
repo: "jjolano/HookKit"
name: "HookKit"
description: "An iOS developer framework for unified hooking methods."
readmeQualityOk: true
url: "https://github.com/jjolano/HookKit"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 55
forks: 19
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 5
createdAt: "2022-12-23T19:26:13Z"
lastCommitAt: "2026-08-25T04:08:43Z"
lastReleaseAt: "2026-08-18T16:09:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["jjolano"]
openGraphImageUrl: "https://opengraph.githubassets.com/36b14843066f5f1d7f60030bcb0f47f5bc22fd8431c02831ec2039c436b1a3e2/jjolano/HookKit"
---

# HookKit

A slim iOS developer framework that unifies nine hooking backends behind one API.

## Backends

Objective-C messages always use HookKit's runtime module; they do not select or dispatch through a backend. The implicit default routes functions through `FUNCTION_INLINE` then `FUNCTION_REBIND`, and memory patches through capable backend descriptors. A route that returns the side-effect-free `HK_ERR_NOT_SUPPORTED` result falls through to the next candidate; hard errors and partial installs stop. Explicit type/category constructors remain pinned unless the caller chooses `substitutorWithAutoCoverCategories:`. fishhook and litehook are compiled in on every arch, and Dobby on modern arm64/arm64e. Backends are not packaged separately: one package covers each supported rootful, rootless, or roothide profile described under "Building." (This replaces the v1 Modulous plugin-bundle architecture.)

### Selection

Backends are selected by name, by priority list, or by capability:

- `substitutorWithTypes:` names specific backends; the first available one wins in registry order and remains pinned. Dobby, `native`, Frida, Swift, and litehook are not selected by this explicit type API…
