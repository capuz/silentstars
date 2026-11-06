---
repo: "helena-bioinformatics/folklore-mcp"
name: "folklore-mcp"
description: "Automated ACMG/AMP germline variant classification and assessment via MCP, with gene profiles and scientific literature."
readmeQualityOk: true
url: "https://github.com/helena-bioinformatics/folklore-mcp"
homepage: "https://folklore.helena.bio/integrations/mcp"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 1
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-12T00:09:12Z"
lastCommitAt: "2026-11-05T23:42:46Z"
lastReleaseAt: "2026-10-30T19:59:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 56
maintainers: ["vladimir-mitev"]
openGraphImageUrl: "https://opengraph.githubassets.com/02b26281e1bbdd91327e9cd695bee5ef6972f3f7844ce52a7c6818ed2c6f9d24/helena-bioinformatics/folklore-mcp"
promoted: true
postedAt: "2026-11-05T08:13:37.322Z"
---

# Folklore Clinical Variant Interpretation MCP

One hosted MCP server for public scientific queries and authenticated case workflows.

Endpoint: https://api.helena.bio/folklore/v1/mcp

Version 2.0.0

Connect your MCP client directly to this Streamable HTTP endpoint. No local
Folklore server is required. Anonymous callers receive 11 public tools.
Send your Folklore API key in the Authorization Bearer header to access 18
additional case, source and result tools at the same endpoint. Invalid supplied
credentials fail authentication; they do not select the anonymous catalog.

Create a key in your Folklore account for the selected account and sources.
Keep it in your client's secret store, never in prompts, tool arguments or URLs.
The selected account's native subscription capabilities, usage limits and
eligible credits govern processing. A key does not grant funded compute.

See [case workflows](https://github.com/helena-bioinformatics/folklore-mcp/blob/HEAD/docs/CASE_WORKFLOWS.md), the
[18 authenticated tool schemas](https://github.com/helena-bioinformatics/folklore-mcp/blob/HEAD/registry/authenticated-tools.json) and the
[public task…
