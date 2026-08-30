---
repo: "KingHacker9000/Claim-Free-Games"
name: "Claim-Free-Games"
description: "Automatically Claims Free Games from the epic Games Launcher Store"
readmeQualityOk: true
url: "https://github.com/KingHacker9000/Claim-Free-Games"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-07-10T09:16:45Z"
lastCommitAt: "2026-08-30T00:42:35Z"
lastReleaseAt: "2020-07-10T10:56:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 70
undervaluedScore: 37
maintainers: ["KingHacker9000"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb6f6c6f3a0f8389a3bd4253ae0bce62dc617bf17ea72d0e7efa342f5073682e/KingHacker9000/Claim-Free-Games"
---

# 🎮 Claim Free Games

**Automatically claim Epic Games Store giveaways from a Raspberry Pi — API first, browser only when needed.**

</div>

---

Claim Free Games is a small self-hosted service that checks Epic's current giveaways once a day and claims anything missing from your library.

The normal path is completely browserless. If Epic rejects the API purchase, the service falls back to a real headed Chromium session running invisibly under Xvfb. If Epic asks for login, CAPTCHA, or an unexpected checkout step, you get a phone notification and can take over the Pi browser remotely through noVNC.

## How it works

```text
systemd timer (daily)
        │
        ▼
Epic free-games API
        │
        ▼
Epic entitlement check
        │
        ├── already owned ───────────────► exit silently
        │
        ▼
🔔 new unowned giveaway detected
        │
        ▼
Epic Launcher quickPurchase API
        │
        ├── entitlement verified ────────► ✅ notify success
        │
        ▼
headed Chromium on Xvfb
        │
        ├── checkout succeeds ───────────► ✅ notify success
        │
        ▼
login / CAPTCHA / changed checkout
        │
        ▼
🔔 ntfy alert → noVNC over…
