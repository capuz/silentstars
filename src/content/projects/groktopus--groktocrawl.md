---
repo: "groktopus/groktocrawl"
name: "groktocrawl"
description: "Self-hosted, API-compatible Firecrawl alternative with Agent endpoint. MIT license. One docker compose up."
readmeQualityOk: true
url: "https://github.com/groktopus/groktocrawl"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 74
forks: 11
openIssues: 6
closedIssues: 230
watchers: 2
contributors: 7
recentReleases: 6
createdAt: "2026-05-21T06:33:34Z"
lastCommitAt: "2026-08-23T04:08:43Z"
lastReleaseAt: "2026-06-24T04:18:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 40
maintainers: ["magnus919", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f36d334dbfeb2cdd9d8bfe3197f731ebdbbfd19c2a9878d69d4b586ed23a011d/groktopus/groktocrawl"
discussionCount: 2
---

# GroktoCrawl

GroktoCrawl is a self-hosted, MIT-licensed web data platform compatible with the Firecrawl v2 API surface. It combines scraping, crawl and map jobs, search, structured extraction, browser automation, monitors, semantic retrieval, an autonomous research agent, and an MCP server in one Docker deployment.

## Start here

Choose your path. Both run the same Docker stack defined in `docker-compose.yml`; they differ in which services and credentials you configure.

### Local demo (fixture profile)

The fastest end-to-end smoke test, with no external credentials. The `fixture` profile starts a local LLM fixture (`llm-svc`) and two fixture test sites (`test-site`, `tier3-fixture`).

**Config:** copy `.env.sample` to `.env`. No credentials are required; the optional direct SlopSearX MCP companion (`slopsearx-mcp`) is opt-in via the `mcp` Compose profile and only then needs a non-empty `SLOPSEARX_MCP_AUTH_TOKEN`.

```bash
cp .env.sample .env
docker compose --profile fixture up --build -d
curl http://localhost:8080/health
./groktocrawl scrape https://example.com
```

**Expected success output:** `curl http://localhost:8080/health` returns `{"status":"ok", "checks":{...}}` once…
