---
repo: "supabase/server"
name: "server"
description: "Server-side utilities for Supabase. Handles auth, client creation, and context injection so you write business logic, not boilerplate."
url: "https://github.com/supabase/server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 81
forks: 10
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 310
recentReleases: 0
createdAt: "2026-02-24T15:12:29Z"
lastCommitAt: "2026-07-03T12:40:24Z"
lastReleaseAt: "2026-04-01T09:03:58Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 31
maintainers: ["mandarini", "supabase-releaser[bot]", "tomaspozo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e26bc4c1812a8ba1eba890e3f9ac933b990b945e58d83db51af7a340d0c472bf/supabase/server"
fundingLinks: ["GITHUB:https://github.com/supabase"]
discussionCount: 2
---

# @supabase/server

> **v1.X — Public Beta.** First stable release under SemVer: breaking changes only ship as a major bump. The package is still early — expect new adapters, ergonomic improvements, and features to land frequently in minor releases. Found a rough edge? [Open an issue](https://github.com/supabase/server/issues) or [submit a PR](https://github.com/supabase/server/blob/main/CONTRIBUTING.md).

> **Coming from a `0.x` release?** See [MIGRATION.md](MIGRATION.md) for the v0 → v1 rename map (`allow` → `auth`, `'public'` → `'publishable'`, `authType` → `authMode`, `claims` → `jwtClaims`, …).

`@supabase/server` gives you batteries included access to the
[supabase-js SDK](https://github.com/supabase/supabase-js), including client
creation and authentication automatically scoped to the inbound requests to your
Edge Functions and APIs.

```ts
import { withSupabase } from '@supabase/server'

export default {
  fetch: withSupabase({ auth: 'user' }, async (_req, ctx) => {
    // RLS-scoped — this user only sees their own favorites
    const { data: myGames } = await ctx.supabase.from('favorite_games').select()
    return Response.json(myGames)
  }),
}
```

One import. One line…
