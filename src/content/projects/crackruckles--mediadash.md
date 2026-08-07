---
repo: "crackruckles/MediaDash"
name: "MediaDash"
description: "Jellyfin plugin that keeps your library lean and playable: finds duplicates, broken files, oversized encodes and unwanted language tracks, then fixes them safely."
readmeQualityOk: true
url: "https://github.com/crackruckles/MediaDash"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [61, 38]
topics: ["jellyfin", "jellyfin-plugin", "media-management", "media-server", "transcoding"]
stars: 12
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-05T00:53:49Z"
lastCommitAt: "2026-08-07T05:15:12Z"
lastReleaseAt: "2026-07-21T01:47:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 42
maintainers: ["crackruckles", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9700da2687257af566645052844f75a1097e94b1ced1a6dcd69178af8108c399/crackruckles/MediaDash"
---

# MediaDash

**The one plugin a Jellyfin library owner needs.**

Duplicates, broken files, oversized encodes, wrong-language tracks, misplaced files, missing subtitles, corrupt artwork, executables where media should be, stale unwatched content — surfaced on one dashboard and fixed safely, the moment your server goes idle.

</div>

---

> [!NOTE]
> MediaDash is a **third-party plugin**, not officially affiliated with the Jellyfin project. It's not yet in the official Jellyfin plugin catalog — install from the community repository URL below.

## Install (30 seconds)

1. In Jellyfin: **Dashboard → Plugins → Repositories → +** and paste:

   ```
   https://raw.githubusercontent.com/crackruckles/MediaDash/main/manifest.json
   ```

2. Open **Catalog**, find **MediaDash**, click **Install**, restart Jellyfin.
3. Open **Dashboard → My Plugins → MediaDash** — the first-run wizard walks you through each feature, one step at a time.

Requires Jellyfin **10.11+** or **12.0+**. One binary covers both — the manifest advertises `targetAbi` for each host line, and the plugin bridges the `IUserManager` / `User` entity changes between 10.11 and 12.0 via reflection so the same install works…
