---
repo: "eschizoid/stride"
name: "stride"
description: "A local training intelligence engine for athletes and AI coaches"
readmeQualityOk: true
url: "https://github.com/eschizoid/stride"
language: "Roc"
languages: ["Roc"]
languagePcts: [95]
topics: ["cli", "llm", "roc-lang", "sqlite", "strava", "training"]
stars: 7
forks: 1
openIssues: 12
closedIssues: 217
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-27T19:27:25Z"
lastCommitAt: "2026-11-05T08:05:48Z"
lastReleaseAt: "2026-08-31T09:04:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 62
maintainers: ["eschizoid", "github-actions[bot]", "mason"]
openGraphImageUrl: "https://opengraph.githubassets.com/50d74e71cf34490343e08ad919735aaf990bd58fdff1fafa7da0803d2b7bc1f6/eschizoid/stride"
---

# stride

stride answers the training questions Strava doesn't. Is my training actually polarized?
Is my fitness climbing? When was my last _real_ hard session? Is my FTP stale? It reads
your own Strava history and computes the answers locally, into a SQLite file you own.

Local-first and deterministic, written in [Roc](https://www.roc-lang.org). Strava is one
ingestion layer, not the product. The engine does the math; attach an LLM and it does the
judgment, never the arithmetic — and it can steer the desktop window while it coaches.

```terminaloutput
$ stride summary
── stride report (as of 2026-08-17) ──────────────────

  fitness (CTL): 36   fatigue (ATL): 42   form (TSB): -6
  → form -6, up 6 from a week ago — modeled fatigue building, 3 days in this band
  ramp: +0/wk · +2/wk over 28d

  last 28 days:
    21 sessions · 19.1h · 324.9 km
    training load: 1232 (75% measured by power or pace — rest estimated from HR/RPE; see doctor)
    confidence: 75% high · 25% medium · 0% low
    time in HR zones: Z1 211m  Z2 243m  Z3 70m  Z4 263m  Z5 0m
    polarization: 54% easy (Z1-2) / 15% moderate (Z3) / 31% hard (Z4-5)
    ⚠ zone gap: no Z5 heart-rate time in 28 days (could be no hard…
