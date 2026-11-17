---
repo: "floor/material"
name: "material"
description: "Material Design 3 expressive components for the web: as plain JavaScript, as web components, and as React, Vue, Svelte and Solid components. Written in TypeScript, with zero dependencies."
readmeQualityOk: true
url: "https://github.com/floor/material"
homepage: "https://md3.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["design-system", "material-design", "material-design-", "md3", "react", "solid", "svelte", "typescript", "ui-components", "vue"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 30
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2015-02-21T01:17:24Z"
lastCommitAt: "2026-11-17T14:35:54Z"
lastReleaseAt: "2026-10-16T17:09:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 100
undervaluedScore: 86
maintainers: ["floor"]
openGraphImageUrl: "https://opengraph.githubassets.com/4153e4b2d2690e9b82e9adafff6b5ee17c710f77e9023b25eed9f7678ecfaf19/floor/material"
---

# material

Material Design 3 components for the web: as web components, as React, Vue, Svelte and Solid components, and as plain JavaScript. Written in TypeScript, with zero dependencies.

**Documentation, live playgrounds and examples: [md3.io](https://md3.io)**

```html
<form>
  <m-text-field name="email" type="email" label="Email" required></m-text-field>
  <m-switch name="news" checked>Newsletter</m-switch>
  <m-button type="submit">Sign up</m-button>
</form>
```

Once the elements are registered ([below](#use-it-your-way)), these controls take part in the form as native ones do: its value, reset and validation.

## Why material

- **Material 3 Expressive.** Component sizes, shapes, colours and spring motion follow the Material 3 tokens.
- **One implementation, every stack.** The same component is a custom element, a React, Vue, Svelte or Solid component, and a factory, so it looks and behaves the same in each.
- **Measured sizes.** Every component has a gzip budget that CI enforces on each pull request, and bundlers keep only what you import. The numbers are under [Sizes](#sizes).
- **Rootless entries.** `material/components/listbox` and…
