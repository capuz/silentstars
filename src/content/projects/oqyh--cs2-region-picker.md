---
repo: "oqyh/cs2-Region-Picker"
name: "cs2-Region-Picker"
description: "Block CS2 matchmaking regions you don't want, straight from a world map. Uses Windows Firewall"
readmeQualityOk: true
url: "https://github.com/oqyh/cs2-Region-Picker"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["block", "blocker", "counter-strike-2", "counterstrike", "cs2", "csgo", "pciker", "pick", "picker", "region"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-12T06:07:06Z"
lastCommitAt: "2026-07-23T06:15:44Z"
lastReleaseAt: "2026-07-12T10:17:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 18
maintainers: ["oqyh"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b3020980ed82a1d976776cac64d8dca5d20ee9158c17e587ad21135b1dd8e8f/oqyh/cs2-Region-Picker"
discussionCount: 4
---

---
<h2 align="center">.:[ Community | Support ]:.</h2>
  </a>
  </a>
</p>

---

# CS2 Region Picker (1.0.1)

cs2 Region Picker Block CS2 Matchmaking Regions You Don't Want, Straight From A World Map. By Using Windows Firewall

---

## How It Works

CS2 routes you through **Valve's SDR relays** — servers around the world that act
as the on-ramps into matchmaking.

1. The app fetches Valve's public relay list.
2. You click the regions you don't want.
3. It blocks those relay IPs in Windows Firewall.
4. Matchmaking can't reach them, so it puts you somewhere else.

Valve rotates relay IPs often — the app checks on every launch and rebuilds your
rules automatically. You never have to redo anything.

---

## How To Use

1. Run **CS2RegionPicker.exe** (needs admin — it writes firewall rules).
2. Click regions on the map to mark them:
   🟢 allowed · 🟣 blocked · 🔵 not applied yet
3. Hit **▶ Apply**.
4. Close the app. The block stays.

**Set your max ping in CS2** — the app tells you the exact number:

```
mm_dedicated_search_maxping <number>
```

If it's lower than your slowest allowed region, matchmaking will never find a
server.

**Using an antivirus firewall?** (Bitdefender,…
