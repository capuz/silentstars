---
repo: "characterecho-sean/edvr-unofficial-patch"
name: "edvr-unofficial-patch"
description: "Unofficial VR fixes for Elite Dangerous: Odyssey - per-eye brightness, black void around the on-foot panel, adjustable panel distance"
readmeQualityOk: true
url: "https://github.com/characterecho-sean/edvr-unofficial-patch"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["elite-dangerous", "virtual-reality", "vr"]
stars: 34
forks: 2
openIssues: 9
closedIssues: 18
watchers: 4
contributors: 2
recentReleases: 10
createdAt: "2026-08-09T19:44:55Z"
lastCommitAt: "2026-09-18T14:00:35Z"
lastReleaseAt: "2026-08-17T20:11:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 41
maintainers: ["characterecho-sean"]
openGraphImageUrl: "https://opengraph.githubassets.com/22c01fc705f5c4f3a0d12de42fcc7490aa8ac87f26a57b3753825c58d86cce94/characterecho-sean/edvr-unofficial-patch"
fundingLinks: ["KO_FI:https://ko-fi.com/seancharacterecho"]
---

# EDVR — an unofficial patch for Elite Dangerous: Odyssey in VR

Fixes for things that make Odyssey uncomfortable in a headset. Two dozen fixes,
a native OpenXR package, about three minutes — the short list is under [What it
fixes](#what-it-fixes), and each one in full is in
[docs/fixes.md](https://github.com/characterecho-sean/edvr-unofficial-patch/blob/HEAD/docs/fixes.md).

**The Windows release uses Elite's OpenVR-facing path to reach native OpenXR.**
The bundled Khronos loader uses the Windows Active OpenXR Runtime. SteamVR is a
valid selected runtime; no SteamVR loader or OpenComposite installation is
required. Elite's legacy LibOVR path is not a fallback.

**Something not working?** [Open an
issue](https://github.com/characterecho-sean/edvr-unofficial-patch/issues/new/choose)
— that is the place a bug gets fixed, because you can attach the log, and the
log is usually the whole answer. For everything else — setup questions, "is
this normal", or just talking about it — there is a
[Discord](https://discord.gg/ynkdf6Gdua).

EDVR is free and stays free. If it improves your VR experience, [tips are
welcome](https://ko-fi.com/seancharacterecho) — please do not feel any
obligation…
