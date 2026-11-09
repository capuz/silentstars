---
repo: "profullstack/threatcrush"
name: "threatcrush"
description: "Real-time threat intelligence platform with threat feeds, vulnerability tracking, attack surface monitoring, and threat actor intelligence."
readmeQualityOk: true
url: "https://github.com/profullstack/threatcrush"
homepage: "https://threatcrush.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["agent", "defense", "scanner", "security"]
stars: 26
forks: 15
openIssues: 6
closedIssues: 23
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-04-04T11:36:44Z"
lastCommitAt: "2026-11-09T03:30:05Z"
lastReleaseAt: "2026-08-10T18:15:30Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["ralyodio", "sh1pt-actions-fleet[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/986862030005e57a8ffaa54599ab21854e3fb0cae9e0317abfef4b40cb34d632/profullstack/threatcrush"
---

ThreatCrush

---

ThreatCrush is a security daemon that runs on your server, **reading your logs and watching inbound connections** for live attacks. It checks every nginx request against 96 OWASP CRS rules (paranoia level 1) + 4 ThreatCrush rules with CRS anomaly scoring, runs 24 detection rules over auth, web and network events, auto-bans attackers, scans your codebase, spot-checks your URLs, and alerts you in real-time.

```
$ threatcrush monitor

2026-09-25 12:03:41 [INFO]    Starting foreground monitor...
2026-09-25 12:03:41 [INFO]    Monitoring 3 log source(s):
  ● ssh-guard      → /var/log/auth.log
  ● log-watcher    → /var/log/nginx/access.log
  ● log-watcher    → /var/log/syslog

  Press Ctrl+C to stop

2026-09-25 12:03:45 [CRITICAL] [log-watcher]  Attack detected [SQLI]: GET /api/users?id=1%20UNION%20SELECT%20password%20FROM%20users (185.43.21.8)
2026-09-25 12:03:46 [CRITICAL] [log-watcher]  Attack detected [PATH_TRAVERSAL]: GET /../../etc/passwd (185.43.21.8)
2026-09-25 12:03:47 [HIGH]     [ssh-guard]    Failed SSH login for root from 91.232.105.3 (91.232.105.3)
2026-09-25 12:03:48 [HIGH]     [ssh-guard]    Invalid SSH user attempt: admin123 from 103.77.88.99…
