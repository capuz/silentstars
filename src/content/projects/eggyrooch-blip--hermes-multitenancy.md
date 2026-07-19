---
repo: "eggyrooch-blip/hermes-multitenancy"
name: "hermes-multitenancy"
description: "One Feishu bot, N users, N profiles. A hermes-agent plugin for multi-tenant routing."
readmeQualityOk: true
url: "https://github.com/eggyrooch-blip/hermes-multitenancy"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 13
forks: 4
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-26T05:02:55Z"
lastCommitAt: "2026-07-19T05:04:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 38
maintainers: ["lanmoke"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea4893e732cb5e0b9a5f79824b686ed066431023fc561c4c47d671b1cbbc0f15/eggyrooch-blip/hermes-multitenancy"
---

# hermes-multitenancy ☤

> **One Feishu bot. N employees. N isolated agents.** A [hermes-agent](https://github.com/NousResearch/hermes-agent) plugin that turns a single bot into a true multi-tenant platform — every user gets their own persona, memory, sessions, and LLM credentials — **without changing one line of hermes-agent**.

**English** | [简体中文](https://github.com/eggyrooch-blip/hermes-multitenancy/blob/HEAD/README.zh-CN.md)

<p>
</p>

**The problem it solves:** hermes-agent is a brilliant *personal* agent runtime — but it assumes **1 bot = 1 user**. You can't drop it into a 1,000-person company without either running 1,000 processes, giving everyone the same shared persona, or forking the core and re-patching on every upgrade. This plugin makes **1 bot = N users** a deployable reality: a `pre_gateway_dispatch` hook routes each Feishu sender to their own `ProfileRuntime`, and the upstream core stays untouched.

<table>
<tr><td><b>True per-user isolation</b></td><td>Each Feishu user is routed to their own profile — independent <code>SOUL.md</code>, memory, session history, workspace, tools, and LLM credentials. Not a shared persona behind one bot. 千人千面.</td></tr>…
