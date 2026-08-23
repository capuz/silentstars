---
repo: "coding-parrot/pothole-reporter"
name: "pothole-reporter"
description: "AI pothole reporter for Bengaluru: on-device Android app that detects potholes, finds the responsible corporation officer and road contractor from public records, and drafts complaint emails you review and send."
readmeQualityOk: true
url: "https://github.com/coding-parrot/pothole-reporter"
language: "Python"
languages: ["Python", "JavaScript", "HTML"]
languagePcts: [30, 29, 29]
stars: 112
forks: 20
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-08-17T18:53:24Z"
lastCommitAt: "2026-08-23T04:08:37Z"
lastReleaseAt: "2026-08-19T10:21:42Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["coding-parrot", "deepanshu-iitm"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe70e2603fa0c30849ead3360cb48029712a3733532b2342f318d78c463742f9/coding-parrot/pothole-reporter"
---

# Pothole Reporter

An independent Android app that detects visible road damage, groups nearby repeat
observations, and prepares a complaint for the user to review. Reports and stored photos
remain on the phone; selected resized images go directly to OpenAI for analysis, and
complaint evidence leaves only when the user chooses an external handoff. There is no
project-operated backend or account system.

<sub>Example detected by the app. Select the thumbnail for the full-size photo.</sub>

## Coverage

| Area | Current scope |
| --- | --- |
| National Highways | Operational NH/NE carriageways mapped across India in the pinned 20 August 2026 OpenStreetMap extract. A match goes to Rajmargyatra/1033; the maintaining agency is not guessed. |
| Delhi | Full Delhi NCT; the wider NCR is excluded. |
| Maharashtra | The current Mumbai Metropolitan Region (MMR), including its rural extent, and Pune Municipal Corporation (PMC). PCMC is excluded. |
| West Bengal | Kolkata Municipal Corporation (KMC) only; Howrah, Bidhannagar/Salt Lake, New Town, and neighbouring bodies are excluded. |
| Karnataka | Supported urban local bodies with a published recipient; nationwide highway routing takes…
