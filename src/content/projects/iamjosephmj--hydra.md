---
repo: "iamjosephmj/hydra"
name: "hydra"
description: "A Gradle-plugin RASP for Android — dynamically bake root/hooking/cloning/integrity checks into any APK at build time."
url: "https://github.com/iamjosephmj/hydra"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
stars: 30
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-16T00:05:44Z"
lastCommitAt: "2026-06-24T00:23:40Z"
lastReleaseAt: "2026-06-23T18:30:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["iamjosephmj"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebc534866eee46dbee5545645e807d69586285c85a6e26058b29000aafc910ea/iamjosephmj/hydra"
---

</a>

<p>
</p>

<p>
</p>

<p>
</p>

```
        ╔═══════════════════════════════════════════════════════════════════╗
        ║   ▶ P1   ROOT ▰▰  HOOK ▰▰  CLONE ▰▰  VIRT ▰▰  EMU ▰▰  TAMPER ▰▰   ║
        ║                                                        1 CREDIT   ║
        ╚═══════════════════════════════════════════════════════════════════╝
```

### `🕹️  A Gradle-plugin RASP for Android  🕹️`

Add it like any other build plugin and it **dynamically injects** a hardened
native protection layer straight into your APK — no security code, no SDK calls,
no servers. **Apply the plugin, build your app, and the output APK comes out
self-defending.**

<br>

🕹️ &nbsp; 👾 &nbsp; 🪙 &nbsp; ⚡ &nbsp; 🛡️ &nbsp; 🔒 &nbsp; 💥 &nbsp; 🎯 &nbsp; 🏆 &nbsp; 👾 &nbsp; 🕹️

</div>

## 👾 &nbsp; PLAYER GUIDE

Under the hood, applying hydra bakes a heavily OLLVM-obfuscated native core
(`libdicore.so`), a per-build integrity baseline, and a randomized bootstrap into
your APK. Protection starts at process creation and runs entirely on-device, in
native code.

## 🪙 &nbsp; PHILOSOPHY — *"SOME PROTECTION > NONE"*

Security on a device you don't control is never absolute. A determined,…
