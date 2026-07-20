---
repo: "joeynyc/honeycomb-lab"
name: "honeycomb-lab"
description: "Honeycomb Lab — hex map + OpenAI gateway control plane for a home AI fleet"
readmeQualityOk: true
url: "https://github.com/joeynyc/honeycomb-lab"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [60, 20]
topics: ["dgx-spark", "gpu", "homelab", "llm-gateway", "lm-studio", "local-inference", "local-llm", "macos", "mlops", "model-serving"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-11T22:13:05Z"
lastCommitAt: "2026-07-20T06:32:53Z"
lastReleaseAt: "2026-07-12T13:24:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["joeynyc"]
openGraphImageUrl: "https://opengraph.githubassets.com/14b70cd7b84ab87993499a20bbcde1024339d4aecf6d88db2d1da8ecce644617/joeynyc/honeycomb-lab"
---

# Honeycomb

**Every GPU you own — one living map.**

A control plane and OpenAI-compatible gateway for your home AI fleet:
route every model through one endpoint, watch traffic light up the map,
and drive it all from your Mac, iPad, or phone.

[**Install**](#install) · [**Quickstart**](#install) · [**How it works**](#the-gateway) · [**Web dashboard**](#web-dashboard)

</div>

## What it does

<table>
<tr>
<td width="50%" valign="top">

**🔌 One API for the whole fleet**

Point any OpenAI-compatible client at `http://<hub>:4000/v1`. Route by
alias to vLLM boxes, LM Studio, or any endpoint. `cheap` picks the least
expensive healthy backend; `any` adds automatic failover mid-request.

</td>
<td width="50%" valign="top">

**🗺️ A map that tells the truth**

Each node is a hex — color is health, and it goes **LIT** with animated
pulses when traffic flows. The inspector shows real GPU %, memory,
KV-cache, tok/s, and latency trend. Never a catalog dump.

</td>
</tr>
<tr>
<td width="50%" valign="top">

**🛠️ Fleet control from the map**

**PING** a node through the real wire, **SERVE / STOP** its inference
container over SSH, and **DOCTOR** it with…
