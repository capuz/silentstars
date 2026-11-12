---
repo: "brunnojob/ofs2x-offshore-operations"
name: "ofs2x-offshore-operations"
description: "C++20 offshore crew eligibility, muster station staffing, drill timing and audit core."
readmeQualityOk: true
url: "https://github.com/brunnojob/ofs2x-offshore-operations"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["audit-log", "cli", "cpp", "cpp20", "crew-management", "emergency-response", "maritime", "python", "safety-drills"]
stars: 65
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-10-12T02:33:29Z"
lastCommitAt: "2026-11-12T05:35:56Z"
status: "newborn"
tags: ["hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 15
maintainers: ["brunnojob", "moneyandxtc", "rfoffshore"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1414967067/7ac10580-634f-4e06-a34f-08140087d374"
fundingLinks: ["GITHUB:https://github.com/brunnojob"]
discussionCount: 8
---

# OFS2X Offshore Operations created by RF SOLUTIONS OFFSHORE and plublish by Team

A native C++20 command-line engine for offshore crew management, emergency station staffing and timed safety drills. Its domain model enforces vessel-specific eligibility, certificate requirements and auditable attendance.

## Reference dashboard video

This recording shows the reference offshore dashboard. The implementation in this repository is a native C++20 CLI.

[Download the MP4](https://github.com/brunnojob/ofs2x-offshore-operations/raw/refs/heads/main/evidence/demo.mp4)

The original recording is stored in `evidence/demo.mp4`; its checksum is recorded in [evidence/provenance.json](https://github.com/brunnojob/ofs2x-offshore-operations/blob/HEAD/evidence/provenance.json).

## Features

- Crew registration, activation and vessel assignment.
- Station rules with staffing minimums and required certificates.
- Certificate expiry checks against Unix timestamps.
- Vessel isolation and prevention of simultaneous station assignments.
- Idempotent attendance, station occupancy and staffing shortages.
- Monotonic drill duration and prevention of completed drill ID reuse.
- Ordered audit events with an…
