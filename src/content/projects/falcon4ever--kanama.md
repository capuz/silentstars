---
repo: "falcon4ever/kanama"
name: "kanama"
description: "Kanama brings Kotlin to Godot through a GDExtension runtime powered by the JVM and the Foreign Function & Memory API."
url: "https://github.com/falcon4ever/kanama"
homepage: "https://falcon4ever.github.io/kanama/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-15T15:33:20Z"
lastCommitAt: "2026-06-25T01:37:23Z"
lastReleaseAt: "2026-06-05T02:06:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["falcon4ever"]
openGraphImageUrl: "https://opengraph.githubassets.com/342bc1ba2851e09283d69596018f225e887535ccf67da25dcca56709f4bd1935/falcon4ever/kanama"
---

</p>

<h1 align="center">Kanama</h1>

  Kotlin for Godot through a GDExtension runtime powered by the JVM and the
  Foreign Function & Memory API.
</p>

</p>

Kanama lets Kotlin scripts attach to Godot nodes through a GDExtension runtime.
In the Godot editor, Kanama `.kt` files appear as script resources and can be
attached directly to nodes like `.gd` scripts. Kanama aims to preserve the
Godot workflow while giving game code access to Kotlin, Gradle, coroutines, and
the JVM ecosystem.

## Related Projects

Kanama is experimental and uses a Panama/FFM-based GDExtension architecture.
If you want a more established Kotlin integration for Godot today, also
evaluate [Godot Kotlin/JVM](https://godot-kotl.in/en/stable/). It is a
separate project with a different runtime and export model.

## Status

Kanama is experimental and desktop-first. The `0.2.2` preview baseline is
Godot 4.7 stable. Use the
[Godot 4.7 stable archive](https://godotengine.org/download/archive/4.7-stable/)
for compatible editor/player binaries and Android export templates. Desktop
release kits and store add-ons are package artifacts that can be built from
source today and are the intended release path; exported-game…
