---
repo: "exactly/exa"
name: "exa"
description: "exa app monorepo"
readmeQualityOk: true
url: "https://github.com/exactly/exa"
homepage: "https://exactly.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["blockchain", "defi", "drizzle-orm", "expo", "foundry", "hono", "solidity", "tanstack-query", "typescript", "valibot"]
stars: 26
forks: 7
openIssues: 190
closedIssues: 655
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2023-11-06T22:54:56Z"
lastCommitAt: "2026-11-17T12:15:19Z"
lastReleaseAt: "2025-05-05T22:25:56Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 63
maintainers: ["cruzdanilo", "dieguezguille", "exa-version[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73b8cf69a3057c2c805f90350fd8935fe923ca9088421e32708c208b44dbe530/exactly/exa"
discussionCount: 0
---

# exa monorepo

## @exactly/mobile

### development

#### requirements

- [node.js](https://github.com/asdf-vm/asdf-nodejs) v24
- [pnpm](https://pnpm.io/installation) v12
- [foundry](https://getfoundry.sh)
- [slither](https://github.com/crytic/slither) (`pip install -r contracts/requirements.txt`)
- [maestro](https://maestro.mobile.dev) (`brew tap mobile-dev-inc/tap && brew install mobile-dev-inc/tap/maestro`)
- react-native's [dependencies per platform](https://reactnative.dev/docs/environment-setup?guide=native)

#### install

```bash
pnpm install
```

#### run

```bash
pnpm android # for native android app
pnpm ios # for native ios app
```

#### end-to-end tests

```bash
# native
pnpm nx e2e:ios mobile # or e2e:android
maestro test .maestro/flows/local.yaml

# web
pnpm nx e2e:web mobile
pnpm nx e2e:webauthn e2e --flow=transfer --screen=760x600
```

## @exactly/server

[exa server](https://github.com/exactly/exa/blob/HEAD/server)

## @exactly/plugin

[exa plugin and other contracts](https://github.com/exactly/exa/blob/HEAD/contracts)
