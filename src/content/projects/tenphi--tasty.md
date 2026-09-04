---
repo: "tenphi/tasty"
name: "tasty"
description: "A deterministic styling engine for stateful component systems."
readmeQualityOk: true
url: "https://github.com/tenphi/tasty"
homepage: "https://tasty.style"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["css-in-js", "design-system", "react", "engine"]
stars: 34
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-27T10:51:24Z"
lastCommitAt: "2026-09-04T08:11:21Z"
lastReleaseAt: "2026-03-02T11:15:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 44
maintainers: ["tenphi", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c986c0259ec36b0c3778c2b5cf51b1c5284b1a72bb2e27be3e830171434256c3/tenphi/tasty"
---

</p>

<h1 align="center">Tasty</h1>

  <strong>CSS-in-JS for React design systems.</strong><br>
  Build components whose styles don’t fight.
</p>

</p>

---

Describe hover, disabled, variants, themes, and responsive behavior as state maps. Tasty makes one branch win by design—without specificity fights or source-order surprises.

```tsx
import { tasty } from '@tenphi/tasty';

const Button = tasty({
  as: 'button',
  styles: {
    fill: {
      '': '#primary',
      ':hover': '#primary-hover',
      ':active': '#primary-pressed',
      '[disabled]': '#surface',
    },
  },
});
```

Later branches have higher priority. If this button is both hovered and disabled, `[disabled]` wins and the hover rule is excluded. Tasty compiles that decision into mutually exclusive selectors, so the result does not depend on CSS source order.

That is the core promise: add states, variants, themes, and overrides without reopening selector logic by hand.

Tasty fits best when you are building a design system or component library whose components need to stay predictable as their state logic grows. Alongside state maps, it provides a CSS-like DSL, typed style props, tokens, recipes, sub-elements, and…
