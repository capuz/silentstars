---
repo: "Sparpp/typebeat"
name: "typebeat"
description: "type!beat is an osu!lazer fork that swaps out the core gameplay for typing"
readmeQualityOk: true
url: "https://github.com/Sparpp/typebeat"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 6
forks: 6
openIssues: 8
closedIssues: 3
watchers: 0
contributors: 40
recentReleases: 0
createdAt: "2026-07-20T02:13:12Z"
lastCommitAt: "2026-10-21T17:31:28Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 84
undervaluedScore: 59
maintainers: ["lauriys", "Sparpp"]
openGraphImageUrl: "https://opengraph.githubassets.com/77624b0a85b091db82cb9f785535803c15f6a2c7461499df8c532dc3cb2a5f7a/Sparpp/typebeat"
---

# type!beat

o/

Fork of [osu!lazer](https://github.com/ppy/osu) (PLEASE CHECK THEM OUT!!!)

Instead of circle clicking, you type out the lyrics synced up with the song

## Building

Requires the [.NET SDK](https://dotnet.microsoft.com/download); see
[`global.json`](https://github.com/Sparpp/typebeat/blob/HEAD/global.json) for the pinned version.

```
git clone https://github.com/Sparpp/typebeat
cd typebeat
dotnet run --project typebeat.Desktop
```

Or open `typebeat.sln` (`typebeat.Desktop.slnf` for the desktop-only subset) in
your IDE.

The game's art, audio and fonts come from the
[`typebeat.Game.Resources`](https://www.nuget.org/packages/typebeat.Game.Resources)
NuGet package. You don't need to download it yourself: the first build (or
`dotnet restore`) fetches it from nuget.org along with the other dependencies,
at the version in
[`typebeat.Game/typebeat.Game.csproj`](https://github.com/Sparpp/typebeat/blob/HEAD/typebeat.Game/typebeat.Game.csproj).

## Environment variables

Runtime (the game):

| Variable | Effect |
|---|---|
| `TYPEBEAT_API_URL` | Base URL of the type!beat server, for example `http://localhost:5089` while developing against a local server. Redirects every…
