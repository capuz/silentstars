---
repo: "jjolano/HookKit"
name: "HookKit"
description: "An iOS developer framework for unified hooking methods."
readmeQualityOk: true
url: "https://github.com/jjolano/HookKit"
language: "C"
languages: ["C"]
languagePcts: [79]
stars: 55
forks: 20
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 5
createdAt: "2022-12-23T19:26:13Z"
lastCommitAt: "2026-08-28T14:34:30Z"
lastReleaseAt: "2026-08-18T16:09:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["jjolano"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cbf7b28dbf2b7bc1c3a3b7d3a8557e726c02d344fa72857e9d56f4155c7d3ae/jjolano/HookKit"
---

# HookKit

A slim iOS developer framework that unifies nine hooking backends behind one API.

## Backends

Objective-C messages always use HookKit's runtime module; they do not select or dispatch through a backend. The implicit default routes functions through `FUNCTION_INLINE` then `FUNCTION_REBIND`, and memory patches through capable backend descriptors. A route that returns the side-effect-free `HK_ERR_NOT_SUPPORTED` result falls through to the next candidate; hard errors and partial installs stop. Modern core packages statically link Dobby on arm64/arm64e. Frida Gum is a separate, manual-opt-in provider package; fishhook and LiteHook remain source-only compatibility material.

### Selection

Ask the runtime which backend IDs are currently available, then select an
ordered subset for one substitutor. The selection is strict for its function
and memory hooks: an unsupported target returns `HK_ERR_NOT_SUPPORTED` rather
than falling through to an unselected backend. Objective-C message hooks
remain facade-native. No backend plist is read.

```objc
NSArray<NSString *> *ids = [HKSubstitutor getAvailableBackendIDs];
HKSubstitutor *sub = [HKSubstitutor…
