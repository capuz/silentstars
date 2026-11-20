---
repo: "peretyn/peretyn"
name: "peretyn"
description: "TypeScript-first, composable ReBAC platform, powered by OpenFGA"
readmeQualityOk: true
url: "https://github.com/peretyn/peretyn"
homepage: "https://peretyn.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["access-control", "authorization", "openfga", "rebac", "typescript", "zanzibar"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 21
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-13T23:24:11Z"
lastCommitAt: "2026-11-20T08:55:29Z"
lastReleaseAt: "2026-10-17T08:12:19Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 65
maintainers: ["lyingpasta", "github-actions[bot]", "thanoswasbusy"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe2ec6fb0a991429e28189a69d6083dc736d5ef8e419168312b00789b76925b8/peretyn/peretyn"
---

# Peretyn

> TypeScript-first, composable ReBAC platform, powered by [OpenFGA](https://openfga.dev).

Peretyn answers one question for your application: **is this allowed?** You describe who can do what as relationships between things, and Peretyn decides. This model is relationship-based access control (ReBAC), the model behind Google Zanzibar.

> **Note**
>
> Peretyn is early and pre-1.0. Expect breaking changes between minor versions.

## Example

```ts
import { any, defineSchema, peretyn, type } from '@peretyn/sdk';

export const schema = defineSchema({
  user: type(),
  document: type({
    relations: { owner: ['user'], viewer: ['user'] },
    permissions: { can_view: any('owner', 'viewer') },
  }),
});

const authz = peretyn<typeof schema>({ token: process.env.PERETYN_TOKEN! });

const { allowed } = await authz.check({
  subject: { type: 'user', id: 'alice' },
  relation: 'can_view',
  object: { type: 'document', id: 'roadmap' },
});
```

The SDK checks every type and relation name at compile time.
