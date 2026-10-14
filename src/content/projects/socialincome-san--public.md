---
repo: "socialincome-san/public"
name: "public"
description: "Fighting global poverty with the help of everyday people and your coding skills. Public repository of the NGO and global initiative Social Income."
readmeQualityOk: true
url: "https://github.com/socialincome-san/public"
homepage: "https://socialincome.org"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [62, 31]
topics: ["css", "firebase", "open-source", "opensourceforgood", "react", "storybook", "vite", "firestore"]
stars: 160
forks: 56
openIssues: 99
closedIssues: 699
watchers: 11
contributors: 56
recentReleases: 0
createdAt: "2022-08-14T15:40:39Z"
lastCommitAt: "2026-10-14T08:58:45Z"
lastReleaseAt: "2023-07-21T12:02:35Z"
status: "thriving"
tags: ["needs_contributors", "funded", "community_hub"]
healthScore: 97
undervaluedScore: 46
maintainers: ["rawi96", "renovate[bot]", "ssandino"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/524712019/a19fc4ae-0c14-4a39-a4e6-e3e20310760b"
fundingLinks: ["GITHUB:https://github.com/socialincome-san", "CUSTOM:socialincome.org"]
discussionCount: 38
---

# Social Income

#### #Tech4Good &nbsp;&nbsp;#OpenSource &nbsp;&nbsp;#Solidarity

Social Income is a radically simple solution in the fight against poverty.
The open-source initiative converts donations into an unconditional basic
income, sent directly to the mobile phones of people living in poverty in the
Global South.

https://user-images.githubusercontent.com/6095849/191377786-10cdb4a1-5b25-4512-ade9-2cc0e153d947.mp4

## What Is In This Repository?

This repository contains the public website, internal tools, the shared
design system, local development seed data, and the recipient mobile app.

```text
/
├─ design-system/         Shared React components and Storybook
├─ recipients_app/        Mobile app for Social Income recipients
├─ seed/                  Firebase emulator seed data
└─ website/               Next.js app, APIs, database, and tests
```

`website/` and `design-system/` are npm workspaces. They share one
lockfile at the repository root.

### `website/`

The main Next.js application. It contains:

- Public website: the public Social Income website. Parts are still hardcoded,
  while more content is being moved to Storyblok CMS.
- Portal: internal operations tool…
