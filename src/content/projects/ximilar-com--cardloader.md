---
repo: "Ximilar-com/cardloader"
name: "cardloader"
description: "Free desktop app to scan, identify and grade trading and sports cards with the Ximilar API and local LLMs. It can connect to fujitsu ricoh scanners or analyse local folders."
readmeQualityOk: true
url: "https://github.com/Ximilar-com/cardloader"
homepage: "https://www.cardloader.ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [50, 49]
topics: ["card-scanner", "pokemon", "rust", "sports-cards", "tauri", "trading-cards", "ximilar", "card-identifier", "fujitsu"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-15T11:43:14Z"
lastCommitAt: "2026-11-23T13:27:54Z"
lastReleaseAt: "2026-11-21T15:44:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 45
maintainers: ["Cospel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c243bf213bab2a8ee399ad8f69fe91ba713f447becad72430ffdad5bcbe9777b/Ximilar-com/cardloader"
---

Scan trading, sports and comic cards from a folder or a document scanner, identify and grade them with the
  offline on your computer, and keep every run as a session — on your computer and in Ximilar Cards Cloud.

---

Cardloader is an open-source desktop app for Windows, macOS and Linux, built with [Tauri 2](https://tauri.app)
(Rust) and React.

- **Home and setup.** On first launch, five questions (what you scan: trading card games, sports cards or comics;
  which game; whether you grade, check condition or want prices; how cards come in; and whether the Ximilar API or a
  local model identifies them) set the defaults of new sessions; run them again any time from Home or Settings. Home
  shows the cards analysed in the last 7 days, a year of activity, the last sessions and those defaults.
- **Sessions.** Each analysis of a folder, or each run of the scanner, is a session. The table fills in as
  results arrive; click a card to see its images, the best match, price statistics, grading and links. If the
  match is wrong, select one of the other candidates instead; the correction is also sent to Cards Cloud.
