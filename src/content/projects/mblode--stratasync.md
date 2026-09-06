---
repo: "mblode/stratasync"
name: "stratasync"
description: "Sync that works offline."
readmeQualityOk: true
url: "https://github.com/mblode/stratasync"
homepage: "https://blode.co/stratasync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["linear", "mobx", "nextjs", "sync", "sync-engine"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-22T01:03:52Z"
lastCommitAt: "2026-09-06T08:04:52Z"
lastReleaseAt: "2026-03-22T04:28:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 54
maintainers: ["mblode", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54ffcedaa1a6bdcc353f22029e15b7a145c9d2f5b570a818a20e48105a9eac29/mblode/stratasync"
---

# [Strata Sync](https://blode.co/stratasync)

**An open-source implementation of Linear's sync engine, for TypeScript, React and Next.js**

Every read is instant, every write survives offline, and every client converges on one server-ordered log. On your own Postgres, with no hosted service.

  </a>
  </a>
</p>

</div>

## Docs

Models, adapters, and the sync protocol, with a full API reference.

<p>
</a>
</p>

## Install

```bash
npm install @stratasync/core @stratasync/client @stratasync/react @stratasync/mobx @stratasync/storage-idb @stratasync/transport-graphql
npm install react mobx mobx-react-lite
```

## Quickstart

Three files. Or run `npx skills add mblode/stratasync` and let the skill
scaffold them for you.

### 1. Define your models (`lib/sync/models.ts`)

```typescript
import { ClientModel, Model, Property } from "@stratasync/core";

@ClientModel("Todo", { loadStrategy: "instant" })
class Todo extends Model {
  @Property() declare title: string;
  @Property() declare completed: boolean;
}
```

### 2. Create the client (`lib/sync/client.ts`)

```typescript
import { createSyncClient } from "@stratasync/client";
import { createMobXReactivity } from "@stratasync/mobx";…
