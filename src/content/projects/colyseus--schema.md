---
repo: "colyseus/schema"
name: "schema"
description: "An incremental binary state serializer with delta encoding for games."
readmeQualityOk: true
url: "https://github.com/colyseus/schema"
homepage: "https://docs.colyseus.io/state/schema/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["colyseus", "schema", "serialization", "binary", "delta-encoding", "delta-compression", "game-state"]
stars: 168
forks: 59
openIssues: 29
closedIssues: 109
watchers: 9
contributors: 30
recentReleases: 0
createdAt: "2018-12-25T13:54:44Z"
lastCommitAt: "2026-08-18T03:47:43Z"
lastReleaseAt: "2023-10-09T21:46:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 32
maintainers: ["endel", "FTWinston", "Hoodgail"]
openGraphImageUrl: "https://opengraph.githubassets.com/236e6a2d4434a4833d0fbb6a2539704d5b9607d28dd3a8122b1cb0c08699e6e1/colyseus/schema"
---

<br>
  <p>
    An incremental binary state serializer with delta encoding for games.<br>
    Made for <a href="https://github.com/colyseus/colyseus">Colyseus</a>, yet can be used standalone.
  </p>
</div>

# Features

- **Incremental State Synchronization**: Send only the properties that have changed.
- **Trigger Callbacks at Decoding**: [Bring your own](https://docs.colyseus.io/state/callbacks/custom) callback system at decoding, or use the built-in one.
- **Instance Reference Tracking**: Share references of the same instance across the state.
- **State Views**: Filter properties that should be sent only to specific clients.
- **Reflection**: Encode/Decode schema definitions.
- **Schema Generation**: Generate client-side schema files for strictly typed languages.
- **Type Safety**: Strictly typed schema definitions.
- **Multiple Language Support**: Decoders available for multiple languages ([C#](https://github.com/colyseus/colyseus-unity-sdk/tree/master/Assets/Colyseus/Runtime/Colyseus/Serializer/Schema), [Lua](https://github.com/colyseus/colyseus-defold/tree/master/colyseus/serializer/schema),…
