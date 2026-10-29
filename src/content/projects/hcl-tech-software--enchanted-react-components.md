---
repo: "HCL-TECH-SOFTWARE/enchanted-react-components"
name: "enchanted-react-components"
description: "Enchanted React Components is a collection of ui components that are being used in HCL Software products."
readmeQualityOk: true
url: "https://github.com/HCL-TECH-SOFTWARE/enchanted-react-components"
homepage: "https://opensource.hcltechsw.com/enchanted-react-components/?path=/docs/introduction--docs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["component-library", "material-ui", "react", "typescript"]
stars: 10
forks: 43
openIssues: 49
closedIssues: 7
watchers: 4
contributors: 47
recentReleases: 0
createdAt: "2024-04-12T15:16:13Z"
lastCommitAt: "2026-10-29T10:36:38Z"
lastReleaseAt: "2025-09-05T07:48:55Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 78
undervaluedScore: 68
maintainers: ["HanjoHagemeierHCL", "DanielManning", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0ff492bc6a78972690bcd3bce8cfa7d5f592d159b0978b1e7035e7f989ce16/HCL-TECH-SOFTWARE/enchanted-react-components"
discussionCount: 0
---

# @hcl-software/enchanted-react-components

Enchanted React Components is a collection of ui components that are being used in HCL Software products. This package depends on the [Material UI Component Library](https://github.com/mui-org/material-ui/tree/master/packages/material-ui).

(C) 2024 HCL America Inc. Apache-2.0 license [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

## Usage

```sh
npm install @hcl-software/enchanted-react-components
```

```typescript
import Button, { ButtonVariants } from '@hcl-software/enchanted-react-components/dist/Button/Button';

...

return (
  <Button
    id="button-id"
    variant={ButtonVariants.CONTAINED}
    onClick={() => {
      console.log('click');
    }}
  >
    Button
  </Button>,
);

```

## Development

### NPM targets

We provide the following utility development commands:

| taks | command | description |
|--|--|--|
| `install` | `npm ci` | Initial installation of the project dependencies. Run this to get started. |
| `clean` | `rm -rf node_modules` and `rm -rf dist` | Removes all node_modules etc |
| `build lib` | `npm run build` | Builds the package |
| `lint` | `npm run lint` | Run the…
