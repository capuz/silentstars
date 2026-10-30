---
repo: "applifted/lucide-extended"
name: "lucide-extended"
description: "Filled and duotone versions of Lucide icons, for React. Not affiliated with or endorsed by Lucide."
readmeQualityOk: true
url: "https://github.com/applifted/lucide-extended"
homepage: "https://lucideextended.applifted.work/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["icons", "duotone", "figma", "filled", "icon-pack", "lucide", "react", "react-icons", "svg"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-09-24T07:47:33Z"
lastCommitAt: "2026-10-30T11:02:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 42
maintainers: ["sepidsoroush", "sajadabedi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3226e2a2bc3085832d87884970af31b5028bef3ff4f9a6a7f35bc252a1151eea/applifted/lucide-extended"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/applifted"]
---

# lucide-extended-react

Filled and duotone versions of [Lucide](https://lucide.dev) icons, for React.

[Browse the icons](https://lucideextended.applifted.work/) · [Figma](https://www.figma.com/community/file/1687600808552210747) · [npm](https://www.npmjs.com/package/lucide-extended-react)

> Not affiliated with or endorsed by Lucide.

## Install

```sh
npm install lucide-extended-react
```

Keep `lucide-react` for the outlines. React 18 or later. ESM only.

## Usage

```tsx
import { HeartFilled, HeartDuotone } from 'lucide-extended-react'

export function Example() {
  return (
    <>
      <HeartFilled />
      <HeartDuotone size={32} color="crimson" />
    </>
  )
}
```

Each icon has its own file too:

```tsx
import HeartFilled from 'lucide-extended-react/heart-filled'
import HeartDuotone from 'lucide-extended-react/heart-duotone'
```

Only the icons you import end up in the bundle (tree-shakeable).

### Next to `lucide-react`

```tsx
import { Heart } from 'lucide-react'
import { HeartFilled } from 'lucide-extended-react'

export function LikeButton({ liked }: { liked: boolean }) {
  return liked ? <HeartFilled color="crimson" /> : <Heart />
}
```

Some Lucide icons have no…
