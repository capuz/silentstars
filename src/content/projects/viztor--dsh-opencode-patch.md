---
repo: "viztor/dsh-opencode-patch"
name: "dsh-opencode-patch"
description: "OpenCode on DeepSeek Harness — DSH plugin that keeps OpenCode Zen + Go free-tier models working: session affinity, gateway origin headers, and tool-schema fallback."
readmeQualityOk: true
url: "https://github.com/viztor/dsh-opencode-patch"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cordis", "deepseek-harness", "dsh-plugin", "llm", "opencode", "opencode-zen", "session-affinity", "typescript"]
stars: 9
forks: 4
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-30T16:58:01Z"
lastCommitAt: "2026-11-17T14:34:45Z"
lastReleaseAt: "2026-10-01T13:56:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 50
maintainers: ["viztor", "kslz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/624e689b2087edd61915096071c9751af14a584e4fd35390b5e3ec0cca300ecf/viztor/dsh-opencode-patch"
---

---

`dsh-opencode-patch` is a DeepSeek Harness host plugin that keeps **OpenCode Zen & Go** models working inside DSH. Connect `claude-sonnet-4-5`, `gpt-5.4`, `gemini-3.8-flash`, `deepseek-v4.1-flash`, `muse-spark-1.3`, `qwen3.8-flash` and the rest of the OpenCode catalog without network rejections, Cloudflare challenges, entitlement mismatches, or invisible limits.

**The default state.** Point DSH at OpenCode with no plugin and the models do not work at all — not on one shape, on any of them:

- **The request is not recognised as coming from a coding agent.** DSH sends its own `User-Agent`, and no `x-opencode-client`, `x-opencode-project` or `x-opencode-session` at all, so the gateway sees an anonymous SDK call and the traffic falls under the abuse rules the vendor documents for clients that do not identify themselves. **The free tier is a separate matter and this is not its cause**: with every one of those headers restored, a CLI `User-Agent`, a valid session id and the `read`/`bash` tool schemas the fallback injects, a Zen `-free` model still answers `403 FreeTierError` from outside OpenCode while a paid model on the same request answers `200`. The ids are still offered — the…
