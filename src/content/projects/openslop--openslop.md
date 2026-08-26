---
repo: "openslop/openslop"
name: "openslop"
description: "Free, open source video workflow"
readmeQualityOk: true
url: "https://github.com/openslop/openslop"
homepage: "https://app.openslop.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 12
forks: 8
openIssues: 62
closedIssues: 68
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-03-04T08:11:55Z"
lastCommitAt: "2026-08-26T04:17:02Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 54
maintainers: ["umairnadeem", "dchaudhari7177", "VedantMadane"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1172360404/95c0ad0c-8d8b-4971-b27c-bf729f8c05e1"
---

</p>

</p>

  &nbsp;·&nbsp;
</p>

</p>

---

> **Private beta.** Invite-only right now.
> [Hop on the waitlist at openslop.ai](https://openslop.ai) to get in.

## Overview

OpenSlop wires all your favorite AI tools into one workflow so you can make good-looking video in minutes, no more jumping between ten tabs. You bring your AI accounts, OpenSlop brings the workflow. That's it.

Open-source, free forever.

## Key capabilities

- Talk to a bunch of AI providers in one place
- A real editing workflow, not just a prompt box
- Runs in your browser, nothing to install
- Built by engineers from Meta, Google, Stripe, and Dropbox

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 20.9+ (Next.js 16's minimum; CI runs 22)
- A [Supabase](https://supabase.com) project (for auth and database)

### Setup

1. Clone the repo:

```bash
git clone https://github.com/openslop/openslop.git
cd openslop
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file with your environment variables:

Required (auth and database):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key…
