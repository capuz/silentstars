---
repo: "ayarodionov/otp_debug_mcp"
name: "otp_debug_mcp"
description: "MCP server for AI-driven debugging of live Erlang/Elixir OTP nodes: hidden-node attach, recon-based diagnostic battery, safe tracing, snapshot/diff"
readmeQualityOk: true
url: "https://github.com/ayarodionov/otp_debug_mcp"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [98]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T23:17:32Z"
lastCommitAt: "2026-11-10T14:44:35Z"
lastReleaseAt: "2026-10-26T23:33:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 48
maintainers: ["ayarodionov"]
openGraphImageUrl: "https://opengraph.githubassets.com/54a1b3deb50ba934442700e98dfc143b4b2d58cca470222621e2a6040d4745a5/ayarodionov/otp_debug_mcp"
---

# otp_debug_mcp

> **Status: 0.13.0. [Releases](https://github.com/ayarodionov/otp_debug_mcp/releases).**
> Tested from Claude Code against live nodes on Erlang/OTP 26 to 29, on the
> same machine, over TLS distribution and across machines, with a test suite
> and CI on every push. Still young: the TODO list below has the known gaps.

An MCP server that lets AI agents (Claude Code, Claude Desktop, Cursor,
GitHub Copilot, …; see [docs/clients.md](https://github.com/ayarodionov/otp_debug_mcp/blob/HEAD/docs/clients.md))
connect to a **running** Erlang/Elixir/OTP node and debug it: not just raw
introspection primitives, but an encoded diagnostic playbook in the spirit of
[recon](https://ferd.github.io/recon/) and *Erlang in Anger*.

## Design

- **Hidden-node attach.** The server joins the target over Erlang distribution
  as a hidden node that accepts no connections itself (no listening port,
  nothing registered with epmd, and a random cookie of its own), so it
  requires **zero changes to the target application**:
  no dependency, no plug, no redeploy. It works on anything running on the
  BEAM (Erlang, Elixir, Gleam, LFE), unlike in-app servers such as Tidewave
  or extools.
-…
