---
repo: "Wolfe-Jam/grok-faf-mcp"
name: "grok-faf-mcp"
description: "Persistent Project Context for xAI Grok — IANA-registered .faf format · MCP server on a URL"
url: "https://github.com/Wolfe-Jam/grok-faf-mcp"
homepage: "https://faf.one"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-context", "ai-tools", "faf", "grok", "llm", "mcp", "model-context-protocol", "typescript", "vercel", "xai"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2025-11-18T07:53:58Z"
lastCommitAt: "2026-07-04T19:20:28Z"
lastReleaseAt: "2026-05-31T18:48:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["Wolfe-Jam", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1098835832/e756ca87-b65b-4546-a042-aae1617b87a4"
fundingLinks: ["GITHUB:https://github.com/Wolfe-Jam", "KO_FI:https://ko-fi.com/wolfejam", "CUSTOM:https://faf.one/sponsors"]
discussionCount: 1
---

# grok-faf-mcp — FAST⚡️AF Edition

  <h3>Grok asked for MCP on a URL. This is it.</h3>

  <p><strong>Persistent Project Context for xAI Grok.</strong></p>
  <p><code>URL-based • Zero config • Just works</code></p>

</div>

**Home:** [faf.one/grok](https://faf.one/grok)
**Live demo:** [grok.faf.one](https://grok.faf.one)

</div>

**FAF defines. MD instructs. AI codes.**

---

## Install — one line

Add to `~/.grok/config.toml`:

```toml
[mcp_servers.grok-faf-mcp]
url = "https://mcpaas.live/grok/mcp/v1"
```

Restart Grok TUI (or `/mcps r`) to refresh. Tools: `faf_score`, `faf_validate`, `faf_get_tier`, `faf_estimate_tokens`, `faf_analyze` (plus soul/memory ops).

**Smithery:** [wolfe-jam/grok-faf-mcp](https://smithery.ai/servers/wolfe-jam/grok-faf-mcp) — gateway at `https://grok-faf-mcp--wolfe-jam.run.tools`

**Hosted on Cloudflare Workers** — sub-ms cold start, no subprocess, edge-served. 4865-byte Zig WASM engine, parity-tested vs the Rust authority (`xai-faf-rust`). Externally validated by Grok S1 + S2 on 2026-05-27.

**Verify the live contract:**

```bash
curl https://mcpaas.live/grok/mcp/v1/info
```

Returns endpoint, protocol versions, engine details, tool list, and the…
