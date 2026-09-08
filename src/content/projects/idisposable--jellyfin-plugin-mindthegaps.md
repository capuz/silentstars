---
repo: "IDisposable/jellyfin-plugin-mindthegaps"
name: "jellyfin-plugin-mindthegaps"
description: "Jellyfin plugin that finds what's missing and related across your library and builds a todo list to fill the gaps: collections, series, cast & crew filmographies, and recommendations. Adds where-to-watch links and can optionally show missing entries as placeholders."
readmeQualityOk: true
url: "https://github.com/IDisposable/jellyfin-plugin-mindthegaps"
language: "C#"
languages: ["C#"]
languagePcts: [80]
stars: 27
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-16T18:55:58Z"
lastCommitAt: "2026-08-18T23:16:46Z"
lastReleaseAt: "2026-06-18T06:49:41Z"
status: "quiet"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 83
undervaluedScore: 45
maintainers: ["IDisposable", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271531597/87610dc5-49cc-4d34-bb80-3289a3418452"
fundingLinks: ["GITHUB:https://github.com/IDisposable", "KO_FI:https://ko-fi.com/IDisposable"]
---

</p>

<h1 align="center">Mind the Gaps</h1>

Finds what's <b>missing</b> and what's <b>related</b> across your Jellyfin library and builds an easy
todo list for filling the gaps: movies absent from a collection, episodes absent from a series, films
your cast and crew made that you don't own, and related titles worth adding.
</p>

</p>

## What it does

A scheduled task scans your library; a dashboard page (**Dashboard > Gaps Report**) shows the
results: filterable by tab and media type, searchable, with links out (TMDB, IMDb, and more) and an
on-demand "Where to watch" for each item. What it scans for is on its own page
(**Dashboard > Mind the Gaps**), which is also where the plugin's Settings button lands.

</p>

More screenshots throughout the [report guide](https://github.com/IDisposable/jellyfin-plugin-mindthegaps/blob/HEAD/docs/report-guide.md) and the
[configuration reference](https://github.com/IDisposable/jellyfin-plugin-mindthegaps/blob/HEAD/docs/configuration.md).

Every gap is one of three kinds, surfaced as the report's three tabs:

| Tab | What it finds | Examples |
|---|---|---|
| **Set completion** | a missing piece of something you partly own | a movie missing from…
