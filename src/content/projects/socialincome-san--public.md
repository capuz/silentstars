---
repo: "socialincome-san/public"
name: "public"
description: "Fighting global poverty with the help of everyday people and your coding skills. Public repository of the NGO and global initiative Social Income."
readmeQualityOk: true
url: "https://github.com/socialincome-san/public"
homepage: "https://socialincome.org"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [61, 32]
topics: ["css", "firebase", "open-source", "opensourceforgood", "react", "storybook", "vite", "firestore"]
stars: 153
forks: 50
openIssues: 134
closedIssues: 639
watchers: 12
contributors: 47
recentReleases: 0
createdAt: "2022-08-14T15:40:39Z"
lastCommitAt: "2026-09-08T08:16:06Z"
lastReleaseAt: "2023-07-21T12:02:35Z"
status: "thriving"
tags: ["needs_contributors", "funded", "community_hub"]
healthScore: 96
undervaluedScore: 46
maintainers: ["renovate[bot]", "levi499", "MumenthalerManuel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/524712019/a19fc4ae-0c14-4a39-a4e6-e3e20310760b"
fundingLinks: ["GITHUB:https://github.com/socialincome-san", "CUSTOM:socialincome.org"]
discussionCount: 37
---

# Social Income

#### #Tech4Good &nbsp;&nbsp;#OpenSource &nbsp;&nbsp;#Solidarity

Social Income is a radically simple solution in the fight against poverty.
The open-source initiative converts donations into an unconditional basic
income, sent directly to the mobile phones of people living in poverty in the
Global South.

https://user-images.githubusercontent.com/6095849/191377786-10cdb4a1-5b25-4512-ade9-2cc0e153d947.mp4

## What Is In This Repository?

This repository contains the public website, internal tools, local development
seed data, infrastructure code, and the recipient mobile app.

```text
/
├─ recipients_app/        Mobile app for Social Income recipients
├─ seed/                  Firebase emulator seed data
└─ website/               Next.js app, APIs, database, infra, and tests
```

### `website/`

The main Next.js application. It contains:

- Public website: the public Social Income website. Parts are still hardcoded,
  while more content is being moved to Storyblok CMS.
- Portal: internal operations tool for program management, payments,
  recipients, contributors, and admin functionality.
- Dashboard: contributor self-service area for payments, subscriptions, and…
