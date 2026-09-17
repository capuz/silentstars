---
repo: "eriknihlen/OpenAC"
name: "OpenAC"
description: "Open-source Asheron's Call client for .NET 10. The original game's behavior, a maintained codebase, a plugin API."
readmeQualityOk: true
url: "https://github.com/eriknihlen/OpenAC"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["asherons-call", "game-client", "csharp", "dotnet", "vulkan", "silk-net", "mmorpg", "emulator-client"]
stars: 17
forks: 10
openIssues: 17
closedIssues: 70
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-09-08T00:18:52Z"
lastCommitAt: "2026-09-17T08:50:56Z"
lastReleaseAt: "2026-09-15T17:00:31Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 58
maintainers: ["eriknihlen", "shaneedwards", "tombohar"]
openGraphImageUrl: "https://opengraph.githubassets.com/71cec20f15c488c5018dffccff085fb9cacc091beceb934c5a48b118cb85d4b6/eriknihlen/OpenAC"
discussionCount: 0
---

</p>

<h1 align="center">OpenAC</h1>

  An open-source Asheron's Call client for .NET 10.<br>
  <strong>The original game's behavior, in a codebase built to be worked on.</strong>
</p>

</p>

</p>

## What is OpenAC

OpenAC is a from-scratch client for Asheron's Call that reproduces the
observable behavior of the original client in a C# codebase built to be read,
tested, and changed. It
renders with Vulkan through Silk.NET, talks to
[ACEmulator](https://github.com/ACEmulator/ACE) servers over the game's wire
protocol, and exposes a plugin API the original never had.

OpenAC does not ship any game data. You supply your own data files.

## Status

OpenAC is in **beta**: it is fully playable against an ACEmulator server, and
it is under active development. Expect bugs, plenty of them; the perfect is
the enemy of the good, and this is out so people can play it and report what
breaks. Today it does the following:

- Log in, create and select characters, enter the world, and log out cleanly.
- Stream the outdoor world, towns, buildings, cellars, and dungeons with the
  original terrain, scenery, lighting, sky, weather, and day/night cycle.
- Move, jump, and collide the way the original…
