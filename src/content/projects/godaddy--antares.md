---
repo: "godaddy/antares"
name: "antares"
description: "Antares is the GoDaddy Design System and Bento is a headless primitive component library built to support our any design system. It is a collection of reusable components (i.e., primitives) that can be used to build components for your design system"
readmeQualityOk: true
url: "https://github.com/godaddy/antares"
homepage: "https://godaddy.github.io/antares/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["accessibility", "component-library", "design-system", "headless-ui", "monorepo", "primitives", "react", "react-aria", "typescript"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2025-10-17T10:45:18Z"
lastCommitAt: "2026-09-18T04:40:40Z"
lastReleaseAt: "2025-11-06T20:49:25Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 80
maintainers: ["egaitan-godaddy", "dependabot[bot]", "rmojica-godaddy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c4f34b0716c5c9feb5aa2e28dcf8993250cf2e8a262c293f95919ff65afcd19/godaddy/antares"
discussionCount: 0
---

# Antares

A two-tier React component architecture for building accessible design systems.

**Bento** (`@bento/*`) provides unstyled accessibility primitives built on [React Aria](https://react-spectrum.adobe.com/react-aria/). **Antares** (`@godaddy/antares`) provides the styled GoDaddy design system built on top of Bento. The monorepo is managed by [Nx](https://nx.dev/).

## Repository Structure

```text
packages/@bento/*/                # Unstyled accessibility primitives
packages/@godaddy/antares/        # Styled design system
packages/@godaddy/design-tokens/  # Design tokens (SCSS, CSS-in-JS, classnames, DTCG)
packages/@godaddy/generate-cdn-url/ # CDN URL generator for GoDaddy assets
packages/dev/                     # Dev tooling (storybook-addon-helpers, environment)
apps/docs/                        # Storybook documentation
apps/site/                        # Documentation site (Next.js)
configs/                          # Shared build and test configs
```

## Packages

### @godaddy

- [**antares**](https://github.com/godaddy/antares/blob/HEAD/packages/@godaddy/antares) - The GoDaddy design component library built on Bento primitives
-…
