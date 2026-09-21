---
repo: "NOJV-TW/NOJV"
name: "NOJV"
description: "Open-source online judge for competitive programming and CS courses"
readmeQualityOk: true
url: "https://github.com/NOJV-TW/NOJV"
homepage: "https://nojv.tw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["competitive-programming", "education", "online-judge", "prisma", "sandbox", "sveltekit", "typescript"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-08T09:02:16Z"
lastCommitAt: "2026-09-21T09:14:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 61
maintainers: ["TakalaWang", "dependabot[bot]", "RokuSennyou"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc985e26846a79418b44155a7c05460b75b9520cdff0b5aded187d0a32a1ddb6/NOJV-TW/NOJV"
---

<h1 align="center">NOJV</h1>

  An open-source online judge for competitive programming and CS courses —
  contests, course assessments, practice, and plagiarism detection.
</p>

</p>

</p>

> Self-hostable, sandboxed, and built for real contests and classrooms:
> ICPC/IOI scoring, DOMjudge-aligned validators, Temporal-orchestrated judging,
> real-time scoreboards, and AST-based plagiarism detection.

## Features

- **8 languages**: C, C++, Go, Java, JavaScript, Python, Rust, TypeScript
- **3 standard judge types**: Standard (diff), Checker (DOMjudge validator), Interactive (DOMjudge interactor)
- **Advanced Mode escape hatch**: TA-provided Docker image owns grading for problems Standard Mode can't express (network-isolated, read-only rootfs; no static-analysis / artifact-collection / network-access stages — the pipeline is fixed)
- **Contests**: ICPC/IOI scoring, real-time scoreboard, freeze, IP lock, page lock
- **Courses**: Teacher-driven membership management (no self-serve join token), assessments with deadlines
- **Plagiarism detection**: Dolos AST similarity (self-hosted, in-process)
- **Auth**: GitHub OAuth + Google OAuth for general users; password sign-in reserved for…
