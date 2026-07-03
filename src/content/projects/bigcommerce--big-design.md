---
repo: "bigcommerce/big-design"
name: "big-design"
description: "Design system that powers the BigCommerce ecosystem."
url: "https://github.com/bigcommerce/big-design"
homepage: "https://bigcommerce.github.io/big-design"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bigcommerce", "design-system", "react"]
stars: 58
forks: 62
openIssues: 20
closedIssues: 86
watchers: 36
contributors: 476
recentReleases: 0
createdAt: "2019-01-13T21:09:40Z"
lastCommitAt: "2026-07-03T12:22:19Z"
lastReleaseAt: "2019-08-15T19:54:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["github-actions[bot]", "chanceaclark", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac74d9dd92b7fd559d712bda3d383e6eafd2750600c2f04f38fef66573a1193d/bigcommerce/big-design"
---

</a>
</div>

### Documentation

You can find documentation and examples on our [docs page](https://bigcommerce.github.io/big-design).

### Quick start guide

Add BigDesign and styled-components@5 to your project using `npm`:

```
npm install @bigcommerce/big-design styled-components@5
```

or with `pnpm`:

```
pnpm add @bigcommerce/big-design styled-components@5
```

Add the font as a `<link>` in your `index.html`/`<head>` element.

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;600&display=swap" rel="stylesheet" />
</head>
```

If using Next.js, utilize the `next/fonts/google` import:

```tsx
import { Source_Sans_3 } from 'next/font/google';

const sourceSans3 = Source_Sans_3({
  display: 'swap',
  weight: ["200", "300", "400", "600"],
  subsets: ['latin'],
});
```

See https://nextjs.org/docs/app/api-reference/components/font for more details on how to apply the font.

Import the `GlobalStyles` component and use it once in your app. This will set a few styles globally
and add…
