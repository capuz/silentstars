---
repo: "intro-skipper/skipme.db-plugin"
name: "skipme.db-plugin"
description: "Retrieves crowd-sourced segment timestamps from the SkipMe.db API"
readmeQualityOk: true
url: "https://github.com/intro-skipper/skipme.db-plugin"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [69, 26]
stars: 30
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-29T20:10:59Z"
lastCommitAt: "2026-09-19T01:39:28Z"
lastReleaseAt: "2026-04-22T23:16:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 41
maintainers: ["AbandonedCart", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c0c90f7f085f345a7715c7c4759ef230c62e0e799b35059119eb94b52d76d03/intro-skipper/skipme.db-plugin"
---

# SkipMe.db Jellyfin Plugin

SkipMe.db is a Jellyfin media segment provider for crowd-sourced intro, recap,
preview, credits, and commercial timestamps. It synchronizes the data into a
local SQLite cache and makes applicable segments available to Jellyfin for
movies and TV episodes.

The plugin also provides an optional sharing workflow for contributing local
Intro Skipper timestamps back to SkipMe.db.

  <br/>
  </p>
</div>

## Requirements

- Jellyfin 12.0.0-rc2 or a compatible Jellyfin 12 build
- .NET 10 runtime support on the Jellyfin host
- Network access from Jellyfin to the SkipMe.db service
- Optional network access to TVMaze when sharing shows whose external IDs are
  missing

## Installation

1. Download the latest `SkipMe.db-plugin-*.zip` from the project releases.
2. Extract `SkipMe.Db.Plugin.dll`.
3. Copy the DLL into Jellyfin's plugin directory, for example:
   - Linux: `/var/lib/jellyfin/plugins/SkipMe.db/`
   - Windows: `%ProgramData%\Jellyfin\Server\plugins\SkipMe.db\`
4. Restart Jellyfin.
5. Confirm that `SkipMe.db` appears under Dashboard → Plugins.

## How synchronization works

The plugin scans non-virtual movies and TV episodes in the Jellyfin library,
uses…
