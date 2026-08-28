---
repo: "Sma1lboy/coforce-apply"
name: "coforce-apply"
description: "Your job hunt on autopilot — skill-first job application agent: discover, tailor, apply, track. Claude Code skills + Chrome extension, all data local."
readmeQualityOk: true
url: "https://github.com/Sma1lboy/coforce-apply"
homepage: "https://coforce.vercel.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-02T06:25:02Z"
lastCommitAt: "2026-08-28T14:37:16Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 78
maintainers: ["Sma1lboy", "NarwhalChen", "ZHallen122"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b3f93b6c9b1be9d63d2228fde3c41005f1bf2f591cbd291ab8e0fda17a0261a/Sma1lboy/coforce-apply"
---

</p>

# CoForce Apply

**Your job hunt on autopilot.** CoForce Apply is a skill-first job application
agent: Claude Code discovers postings, matches them against your real GitHub
work, builds reviewable resumes, fills and submits approved applications in
your own Chrome, and tracks everything locally. All of your data stays on your
machine.

  <br><em>The local console at <code>localhost:4517</code> — discover, review the
  rendered PDF against the evidence behind it, track, and keep your record.
  Recorded by driving the real console in a browser
  (<code>npm run record:console</code>), not mocked up.</em>
</p>

```
sources (GitHub job lists)          ~/.coforce/ (your data, local only)
        │                            profile.json       your background
   hunt.mjs ──dedup──▶               applications.json  tracker truth
        │                            instructions.md    your standing rules
        ▼                            experience/       sources.json (repo + authors)
                                     └─ compact Tier 0 tagged index
  new postings ──▶ full JD ──▶ Tier 0 match ──▶ LaTeX/PDF ──▶ Review…
