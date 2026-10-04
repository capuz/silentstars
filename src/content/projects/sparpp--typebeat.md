---
repo: "Sparpp/typebeat"
name: "typebeat"
description: "type!beat is an osu!lazer fork that swaps out the core gameplay for typing"
readmeQualityOk: true
url: "https://github.com/Sparpp/typebeat"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 5
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-20T02:13:12Z"
lastCommitAt: "2026-10-04T10:01:29Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 94
undervaluedScore: 72
maintainers: ["Sparpp", "noetypes", "lauriys"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f97720727cfd5d3a7fdabb18b88853648543c9e92ebc44e06daa63d5aa98ec9/Sparpp/typebeat"
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

## Layout

| Path | What |
|---|---|
| `typebeat.Game` | Game shell, menus, editor, and online client (shared osu!-framework layer) |
| `typebeat.Game.Rulesets.TypeBeat` | The typing ruleset: scoring, lyric stage, timing engine |…
