---
repo: "optimuslabs-io/grokpatrol"
name: "grokpatrol"
description: "Offline forensic scanner for Grok Build: finds which git repos and secrets the Grok CLI sent to xAI, and lists your grok.me apps. grokpatrol-online checks which apps open without sign-in, scans them for leaked keys and alerts when one goes public."
readmeQualityOk: true
url: "https://github.com/optimuslabs-io/grokpatrol"
homepage: "https://www.optimuslabs.io/grokpatrol/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["credential-exposure", "data-exfiltration", "dfir", "digital-forensics", "forensics", "golang", "grok", "grok-cli", "incident-response", "offline"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-07-14T18:23:18Z"
lastCommitAt: "2026-11-16T19:39:07Z"
lastReleaseAt: "2026-07-15T23:02:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 20
maintainers: ["alan-optimuslabs", "opt-prime", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/72fc30b322dfb647eb07a5b72440a7e6e814c499cf40258ca215d58e3624ce3f/optimuslabs-io/grokpatrol"
discussionCount: 0
---

# grokpatrol

Detects, on your machine, whether the **Grok Build CLI** collected and queued your
git repositories for upload to xAI — and tells you **which secrets went with them**.

> **Live incident.** The Grok Build CLI was found silently uploading whole git repositories to
> xAI. If you have run it, the question is not whether it *could* — it's what left your disk.

The Grok Build CLI was found to silently upload entire git repositories to Google Cloud Storage. The upload was performed by a background collector that ran **outside the tool-call permission system**, so it fired even in sessions where the model was denied file access. What it shipped:

- every tracked file at git HEAD,
- every git object reachable from HEAD,
- **files deleted from the checkout but still reachable in git history** — which is
  exactly where secrets tend to hide.

Confirmed affected: `0.2.93`. Reported still present in versions through at least `0.2.99`.
grokpatrol detects Grok versions `0.1.212` through the latest observed, `1.0.77`
(`grokver.LatestObserved`); a newer build is flagged, because its config keys, log events or
queue layout may have changed.
