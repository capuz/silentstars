---
repo: "SamirPaulb/filter-lists"
name: "filter-lists"
description: "Ultimate ad-blocking filter list auto-updated every day from 70+ trusted sources. Blocks ads, trackers, malware, phishing, annoyances, crypto miners, and more. Single-URL subscription for uBlock Origin, Brave, and AdGuard."
readmeQualityOk: true
url: "https://github.com/SamirPaulb/filter-lists"
homepage: "https://raw.githubusercontent.com/SamirPaulb/filter-lists/refs/heads/main/filters.txt"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ad-blocker", "adblock", "adblocker", "filter-lists", "privacy", "tracker-blocker", "ublock-origin", "adblocker-lists", "adguard", "brave-browser"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-18T16:44:47Z"
lastCommitAt: "2026-08-03T06:43:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 42
maintainers: ["github-actions[bot]", "SamirPaulb"]
openGraphImageUrl: "https://opengraph.githubassets.com/f17da6996e3c21ea997f7dbe17aa085ccdb1f4a2dee5c29f207f1ecd87d49286/SamirPaulb/filter-lists"
---

# Filter Lists

Comprehensive ad, tracker, malware, phishing & annoyance filter list — auto-compiled from 70+ trusted sources into a single file.

## Subscribe

Add this **one URL** to your browser:

```
https://raw.githubusercontent.com/SamirPaulb/filter-lists/refs/heads/main/filters.txt
```

### uBlock Origin (Desktop)
1. Dashboard → Filter lists → Import → paste the URL above
2. Click "Apply changes"

**One-time fix to prevent YouTube anti-adblock detection:**

uBlock Origin silently disables `trusted-*` scriptlets (the YouTube ad bypass mechanism) from external subscriptions by default. Fix it once:

1. Dashboard → **Settings** → check **"I am an advanced user"** → click the **⚙ gear icon**
2. Find `trustedListPrefixes` (default value: `ublock-`)
3. Change it to:
   ```
   ublock- https://raw.githubusercontent.com/SamirPaulb/
   ```
4. Save

This tells uBlock Origin to trust this list, enabling the `trusted-replace-fetch-response`, `trusted-prevent-dom-bypass`, and `trusted-rpnt` scriptlets that patch YouTube's ad detection at the JavaScript level. Without this step, YouTube can detect the adblocker and show a popup.

### Brave Shields (Desktop & Mobile)
1. `brave://adblock` →…
