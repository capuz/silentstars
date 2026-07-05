---
repo: "oliverbestmann/byke"
name: "byke"
description: "ECS game engine based on ebitengine for golang, heavily inspired by bevy."
readmeQualityOk: true
url: "https://github.com/oliverbestmann/byke"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["bevy", "ebitengine", "ecs", "game-engine", "gamedev"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-29T17:37:22Z"
lastCommitAt: "2026-07-05T20:59:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["oliverbestmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2ecf17a84ea4a5842cad401704b663912b0f70db8889f1d60210fd8f9dd0405/oliverbestmann/byke"
---

# byke

**byke** is an Entity Component System (ECS) library for Go, inspired by the [Bevy](https://bevy.org/) API.

> Although still under development, it already includes a wide range of features.
> Documentation and examples will improve in the near feature.

---

> Note: This README and some documentation was refined using generative AI,
> but all code in this project is handwritten.

With a background in Bevy, you'll find Byke straightforward.
The `App` type is the main entry point - just add plugins, resources, and systems.

```golang
func main() {
   var app App

   app.AddPlugin(GamePlugin)
   app.AddSystems(Startup, spawnCamera, spawnWorld)
   app.AddSystems(Update, Systems(moveObjectsSystem, otherSystem).Chain())
   app.MustRun()
}
```

Components are defined by embedding the zero-sized `Component[T]` type.
System parameters, such as resources, `Local` or `Query`, are automatically injected.
Use `Query[T]` for data retrieval. Byke offers standard query filters such as `With`, `Without`, `Changed`, and more.

```golang
type Velocity struct {
   Component[Velocity]
   Linear Vec
}

func moveObjectsSystem(vt VirtualTime, query Query[struct {
   Velocity  Velocity…
