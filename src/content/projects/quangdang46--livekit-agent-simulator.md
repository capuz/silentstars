---
repo: "quangdang46/livekit_agent_simulator"
name: "livekit_agent_simulator"
description: "Black-box LiveKit voice agent testing: real WebRTC/SIP calls with an AI caller. Catch barge-in, noise, quiet-mic, and latency failures that text pytest misses. Forensic reports + MCP + lks CLI — no agent code changes."
readmeQualityOk: true
url: "https://github.com/quangdang46/livekit_agent_simulator"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [50, 45]
topics: ["ai-agents", "black-box-testing", "ci-cd", "cli", "conversation-ai", "gemini", "livekit", "livekit-agents", "mcp", "open-source"]
stars: 5
forks: 2
openIssues: 9
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-10T04:33:25Z"
lastCommitAt: "2026-09-03T08:13:50Z"
lastReleaseAt: "2026-08-16T10:59:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 61
maintainers: ["quangdang46", "qdang46"]
openGraphImageUrl: "https://opengraph.githubassets.com/a65abf0697268fbe577769fd679ce166e66504b203c39bc280d164aec66db1f4/quangdang46/livekit_agent_simulator"
---

# livekit-agent-simulator

</div>

</div>

**Dial any LiveKit voice agent with an AI simulated caller — WebRTC room, inbound SIP, or outbound SIP — and keep a full forensic log.**  
Standalone MCP server + CLI (`lks`). Black-box testing: no imports from the agent under test, no edits to its code or `.env`.

<h3>Quick Install</h3>

```bash
curl -fsSL "https://raw.githubusercontent.com/quangdang46/livekit_agent_simulator/main/install.sh?$(date +%s)" \
  | bash -s -- --verify
```

</div>

### Install via coding agent (copy-paste)

Paste into Claude Code, Cursor, Codex, AmpCode, Windsurf, or any coding agent **from the repo you want to test**:

```text
Install and configure livekit-agent-simulator (CLI: lks) for this project by following the instructions here:
https://raw.githubusercontent.com/quangdang46/livekit_agent_simulator/main/docs/guide/installation.md

Target project root is this workspace. Use absolute --root paths. Install the portable CLI if missing, run lks init, help fill .agent-sim/config.yaml from my local env or ask me for LiveKit + active caller provider key (Gemini Live or OpenAI Realtime) + agent_name, ensure .agent-sim is gitignored, run preflight, and stop before…
