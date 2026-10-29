---
repo: "organui/organui"
name: "organui"
description: "OrganUI website, documentation, and component registry."
readmeQualityOk: true
url: "https://github.com/organui/organui"
homepage: "https://organui.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 243
forks: 20
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-09-22T17:48:06Z"
lastCommitAt: "2026-10-29T05:50:26Z"
lastReleaseAt: "2026-10-22T07:04:29Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 26
maintainers: ["yamz8", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69db79cb7c2dcd179c8be92a58fe8d03789ab2461d5898756be45eb7f9909faa/organui/organui"
---

The interfaces healthcare deserves.<br />
  Open-source components for healthcare and life sciences, installed as source with the shadcn CLI.

## Quick start

In a React 19 project set up with shadcn and Tailwind CSS 4, add any item by
name:

```bash
bunx shadcn@4.22.1 add @organui/heart
```

```tsx
import { Heart } from "@/components/heart"

export default function Page() {
  return <Heart className="h-[32rem]" />
}
```

`@organui` is listed in shadcn's registry directory, so no setup is needed.
The commands pin the shadcn version the registry is tested with.
The code lands in your project, yours to change. `npx`, `pnpm dlx` and
`yarn dlx` work the same way. New project? [Create](https://organui.com/create)
picks the library, theme and items, and gives you the commands.

### Base UI and Radix

Every item installs on shadcn's Base UI and Radix styles. Radix projects add
OrganUI to `components.json` once, so the CLI fetches the Radix build:

```json
{
  "registries": {
    "@organui": "https://organui.com/r/styles/{style}/{name}.json"
  }
}
```

See [Base UI and Radix](https://organui.com/docs/base-ui) for which items ship
a copy for each library.

## What's inside

| Area…
