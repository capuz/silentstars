---
repo: "bluerobotics/bluePLM"
name: "bluePLM"
description: "Open-source product data and lifecycle management for engineering teams"
readmeQualityOk: true
url: "https://github.com/bluerobotics/bluePLM"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 21
forks: 2
openIssues: 6
closedIssues: 65
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2025-12-03T19:47:09Z"
lastCommitAt: "2026-10-30T11:04:10Z"
lastReleaseAt: "2025-12-08T22:28:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["eldinmiller", "Worxs3D", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cd79c4ddbb48f3e5234eceddc00789d8fe02fdd67ca1d5e0f590b31116284e4/bluerobotics/bluePLM"
---

⚠️ **Disclaimer:** This project is under active development and is considered experimental. Features may change, and stability is not guaranteed. Use at your own risk.

## Quick Start

**[📚 Full Documentation →](https://docs.blueplm.io)**

### For Users

1. [Download BluePLM](https://github.com/bluerobotics/bluePLM/releases)
2. Enter the **Organization Code** from your admin
3. Sign in with Google
4. Connect to a vault and start working

See the [User Setup Guide](https://docs.blueplm.io/user-setup) for details.

### For Admins

1. Create a [Supabase](https://supabase.com) project
2. Connect BluePLM and give it the database connection string once; BluePLM creates the schema and applies later schema updates itself
3. Generate an Organization Code
4. Share the code with your team

See the [Admin Setup Guide](https://docs.blueplm.io/admin-setup) for step-by-step instructions.

## Building from Source

```bash
git clone https://github.com/bluerobotics/bluePLM.git
cd bluePLM
npm install
npm run dev      # Development with hot reload
npm run build    # Production build
```

### Windows SolidWorks service build

On Windows, `npm run build` also builds the SolidWorks service before…
