---
repo: "StudyClub-PlusPlus/studyclub-engineering"
name: "studyclub-engineering"
description: "StudyClub++ code monorepo (public) — core-front / back-office-front. fleet engineering structure."
originalDescription: "StudyClub++ 코드 모노레포 (public) — core-front / back-office-front. fleet engineering 구조."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/StudyClub-PlusPlus/studyclub-engineering"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [54, 37]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2026-07-06T03:29:44Z"
lastCommitAt: "2026-10-31T02:00:22Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 57
maintainers: ["titaniper", "Jeongyounghyeon", "j7hwang"]
openGraphImageUrl: "https://opengraph.githubassets.com/a896109b009f3b181a103f742cc13c043bfa4309dff0702f598d335def8d7650/StudyClub-PlusPlus/studyclub-engineering"
---

# studyclub-engineering

StudyClub code monorepo (**public**). A developer study club service for the United States, Canada, and Korea.

- User site: https://studyclub.life
- Back-office console: https://back-office.studyclub.life
- API: https://api.studyclub.life

> ⚠️ **PUBLIC repository** — Do not commit sensitive information such as `.env` files, tokens, keys, or personal data. For detailed rules, see [`CLAUDE.md`](https://github.com/StudyClub-PlusPlus/studyclub-engineering/blob/HEAD/CLAUDE.md).

> 🚀 **If this is your first time, start with [`ONBOARDING.md`](https://github.com/StudyClub-PlusPlus/studyclub-engineering/blob/HEAD/ONBOARDING.md)** — Clone → `.env` → choose how to run (all in Docker / frontend only locally / backend locally too / production API) → Google login, all in one place.

## Structure

```
frontend/                # Node workspace (pnpm + turbo)
  apps/
    core-front/          # User-facing (Next.js 16, ko/en) — landing, studies, events, guides, notices, about
    back-office-front/   # Operator-facing (Next.js 16) — console for managing studies/events/members/captains
    playground/          # Design component & prototype sandbox
  packages/
    design/…
