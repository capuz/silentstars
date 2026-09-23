---
repo: "Amber-PM/Amber"
name: "Amber"
description: "Lightweight, feature-rich and multiversion NG-Fork"
readmeQualityOk: true
url: "https://github.com/Amber-PM/Amber"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["bedrock-edition", "minecraft-bedrock", "php8", "pocketmine-mp"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 8
createdAt: "2026-07-11T07:23:00Z"
lastCommitAt: "2026-09-23T08:47:31Z"
lastReleaseAt: "2026-09-16T22:06:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["vapebw", "Kazurikiope"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1c5231a0088c8d8c9ea24588faaf43431a003c861467fa81da8ab1300db12fe/Amber-PM/Amber"
---

</a><br>
	<b>AmberPM: A high-performance, multi-version fork of PocketMine-MP written in PHP</b>
</p>

</p>

## What is AmberPM?
**AmberPM** is a high-performance, production-ready fork of PocketMine-MP designed specifically for server networks that require simultaneous multi-version (MV) client compatibility. 

Built on top of the stable **PocketMine-MP 5.44.2** codebase, this fork incorporates a dynamic protocol translation layer. This allows Minecraft: Bedrock Edition clients ranging from version **v1.20.0 (Protocol 589)** to **v1.26.50 (Protocol 2193)** to connect and play concurrently on the same server without requiring external proxies or translators

### Key Features
* 🌐 **Dynamic Multi-Version Support** - Concurrently supports Minecraft: Bedrock protocols from **589 to 2193** (v1.20.0 to v1.26.50) out of the box.
* ⚙️ **Protocol-Isolated Dictionaries & Registries** - Utilizes version-aware mappings for block state NBTs, crafting recipes, and creative inventories using isolated instances to prevent memory cross-contamination.
* 🛠️ **Native Anvil & Repair System** - Provides built-in support for anvil transactions (`AnvilTransaction`), item renaming, item repairing, and…
