---
repo: "rakeshnitb23/toolism"
name: "toolism"
description: "Measure and safely cut the token cost of LLM tool and MCP schemas, with equivalence checking and a CI gate."
readmeQualityOk: true
url: "https://github.com/rakeshnitb23/toolism"
homepage: "https://pypi.org/project/toolism/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "anthropic", "cli", "function-calling", "github-action", "json-schema", "llm", "mcp", "model-context-protocol", "openai"]
stars: 54
forks: 29
openIssues: 44
closedIssues: 36
watchers: 4
contributors: 22
recentReleases: 2
createdAt: "2026-10-16T09:01:25Z"
lastCommitAt: "2026-11-07T10:36:13Z"
lastReleaseAt: "2026-10-31T16:07:30Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 42
maintainers: ["rakeshnitb23", "dependabot[bot]", "CosmonautJones"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7af9353a281ad143f9afde8e6f7d7e204dd63ba3319cee7dc89e283220d36ee/rakeshnitb23/toolism"
discussionCount: 0
---

# toolism

**Your agent pays for its tool definitions on every single request. toolism measures that cost
and cuts it, without changing which tool calls are valid.**

Every tool you give an LLM (OpenAI function, Anthropic tool, MCP server tool) is sent as JSON
Schema with every request. Schema generators such as Pydantic, FastMCP, zod-to-json-schema and
OpenAPI converters pad that JSON with things the model already knows: titles that repeat the
property name, `anyOf` wrappers for optional fields, `default: null`, `$schema` URIs, unused
`$defs`. toolism removes exactly that, proves or tests that the result accepts the same tool
calls, and gives you a CI gate so the cost can't creep back up.

On 14 tool sets (159 tools from 13 popular MCP servers, including the official reference servers,
GitHub, Playwright, Notion, Context7 and AWS docs, plus one generated Pydantic server), the default safe rules cut tool-definition tokens by
**37.4% in total, with a median of 11.3% per tool set**: 22% on the official git server, 34% on
a typical Pydantic-typed server, 73% on Notion (which copies the same nine `$defs` into all 24
tools; 18 of them use none).
Lean, hand-tuned schemas save almost…
