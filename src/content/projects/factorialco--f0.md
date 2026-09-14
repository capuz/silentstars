---
repo: "factorialco/f0"
name: "f0"
description: "The design system behind Factorial HR"
readmeQualityOk: true
url: "https://github.com/factorialco/f0"
homepage: "https://f0.factorial.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 26
forks: 7
openIssues: 28
closedIssues: 8
watchers: 33
contributors: 134
recentReleases: 0
createdAt: "2024-03-20T17:00:30Z"
lastCommitAt: "2026-09-14T09:12:40Z"
lastReleaseAt: "2025-03-19T11:24:54Z"
status: "thriving"
tags: ["community_watch"]
healthScore: 83
undervaluedScore: 49
maintainers: ["eliseo-juan", "sauldom102", "dmitry-zaets"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb21727014c8e9845e39fff1fb40fea9689a1aef7e01c904d74f159bd4653891/factorialco/f0"
---

# F0 Design System

F0 is a comprehensive design system for building consistent user interfaces across web and mobile platforms.

## Packages

This monorepo contains the following packages:

- `@factorialco/f0-core`: Core tokens and utilities shared across platforms (located in `packages/core`)
- `@factorialco/f0-react-native`: React Native implementation of the design system (located in `packages/react-native`)
- `@factorialco/f0-react`: React implementation of the design system (existing)

## Development

### Prerequisites

- Node.js 18+
- pnpm 9+

### Setup

```bash
# Install dependencies
pnpm install
```

### Building

```bash
# Build all packages
pnpm build

# Build a specific package
pnpm --filter @factorialco/f0-core build
pnpm --filter @factorialco/f0-react-native build
```

### Testing

```bash
# Run tests for all packages
pnpm test

# Run tests for a specific package
pnpm --filter @factorialco/f0-core test
pnpm --filter @factorialco/f0-react-native test
```

## License

MIT

## Contributing

F0 is built and maintained by the Foundations team **with** contributions from every Factorial team. To propose a new component, report a bug, or improve something existing, see the…
