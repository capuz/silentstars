---
repo: "soulfiremc-com/soulfiremc.com"
name: "soulfiremc.com"
description: "🧙 SoulFire website and documentation."
readmeQualityOk: true
url: "https://github.com/soulfiremc-com/soulfiremc.com"
homepage: "https://soulfiremc.com"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [71, 28]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2023-09-03T07:04:06Z"
lastCommitAt: "2026-11-03T19:05:42Z"
status: "thriving"
tags: ["funded"]
healthScore: 92
undervaluedScore: 79
maintainers: ["AlexProgrammerDE", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be5e1557669534166ca4ece9c1d75df642684531a5483aaac0c8e4ea4d998a3/soulfiremc-com/soulfiremc.com"
fundingLinks: ["KO_FI:https://ko-fi.com/alexprogrammerde"]
---

# soulfiremc.com

The SoulFire website and documentation run on Cloudflare Workers with TanStack Start and D1.

## Local development

```bash
bun install
bun run db:migrate
bun dev
```

The Cloudflare development server stores the local D1 database in `.wrangler/state`.

## Database migrations

Generate the Better Auth schema after changing auth plugins or upgrading Better Auth:

```bash
bun run scripts/generate-auth-schema.ts
```

Update the pinned auth CLI version in that script when upgrading Better Auth.

After changing a schema, generate a named migration:

```bash
bunx drizzle-kit generate --name <migration-name>
bun run db:migrate
```

Commit the generated SQL and metadata exactly as Drizzle produces them. D1 migrations live in `drizzle-d1/`.

Apply remote migrations with:

```bash
bun run db:migrate:remote
```

The migration workflow runs this command on pushes to `main`.
Set the repository secret `CLOUDFLARE_API_TOKEN` to a token with D1 Edit permission for the configured account.
Apply migrations before deploying code that requires them.

## Read replication

The `DB` binding points to `soulfire-website`. Read replication is enabled in that database's Cloudflare…
