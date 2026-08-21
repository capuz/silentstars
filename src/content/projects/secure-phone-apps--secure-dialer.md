---
repo: "Secure-Phone-apps/Secure-Dialer"
name: "Secure-Dialer"
description: "100% offline, zero-permission FOSS Android dialer & contacts app. The private, ad-free alternative to Google Dialer, Samsung & Truecaller with T9 search, offline spam blocking, AES-256 encrypted backups, and Fake Call simulator."
readmeQualityOk: true
url: "https://github.com/Secure-Phone-apps/Secure-Dialer"
homepage: "https://secure-phone-apps.github.io/Secure-Dialer/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [86]
topics: ["android", "android-app", "dialer", "dialer-app", "lightweight", "material-design", "no-internet", "offline", "privacy-first", "f-droid"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-07-02T08:20:01Z"
lastCommitAt: "2026-08-21T04:12:35Z"
lastReleaseAt: "2026-08-07T05:51:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 53
maintainers: ["Secure-Phone-apps", "dependabot[bot]", "tmpjx555"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286932324/e6178640-5076-42b8-a28b-07e6296822b3"
discussionCount: 1
---

# Secure Dialer 📞 — Pure, Private, & Offline-First Open-Source Android Dialer App

</p>

  </a>
</p>

</p>
</p>

Hey everyone! Welcome to **Secure Dialer**, my open-source, privacy-first, 100% offline Android phone app.

I built this dialer from scratch because I believe your phone dialer is the single most important app on any phone. Every phone call you make or receive should stay completely private and safe between you and the other person. Most pre-installed stock dialers and commercial caller ID apps track your call records, upload your address book to remote servers, and drain your battery with background telemetry and ads. Secure Dialer is built with a simple, honest promise: **zero internet permission, zero ads, zero trackers, and complete on-device privacy.**

```text
┌──────────────────────────────────────────────────────────┐
│                   Android OS Framework                   │
└────────────────────────────┬─────────────────────────────┘
                             │ (Native InCall IPC)
┌────────────────────────────▼─────────────────────────────┐
│             MyInCallService : InCallService              │…
