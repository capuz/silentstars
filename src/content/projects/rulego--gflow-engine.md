---
repo: "rulego/gflow-engine"
name: "gflow-engine"
description: "Embeddable approval workflow engine for Go, built on RuleGo — JSON DSL, full approval semantics, multi-tenant."
readmeQualityOk: true
url: "https://github.com/rulego/gflow-engine"
homepage: "https://gflow.rulego.cc/en/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["approval-workflow", "bpm", "bpmn", "business-process", "go", "golang", "rulego", "workflow", "workflow-engine"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-01T03:10:53Z"
lastCommitAt: "2026-09-03T08:14:22Z"
lastReleaseAt: "2026-09-01T07:53:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["whki"]
openGraphImageUrl: "https://opengraph.githubassets.com/02575af6d125ba1e228cf3196902014ee23519f99cdb2d87cde92b91be705d0a/rulego/gflow-engine"
---

# GFlow Engine

English | [简体中文](https://github.com/rulego/gflow-engine/blob/HEAD/README_ZH.md)

> **GFlow** — approval at the speed of wind
>
> **GFlow Engine** — the embeddable approval workflow engine at the core of the GFlow product family (open-source edition).
> It ships as a Go library: no UI, no HTTP server — you drive it from your own application.
>
> Need something ready to run? **GFlow Platform（极风工作流）** is the GFlow Enterprise Edition,
> with a flow designer, form designer, approval UI and AI review built in.
> Site: <https://gflow.rulego.cc/> · Docs: <https://gflow.rulego.cc/en/> · Live demo: <http://8.134.32.225:8081> (`admin` / `admin123`)

`GFlow Engine` is a lightweight, embeddable approval workflow engine built on [RuleGo](https://github.com/rulego/rulego). Process definitions reuse the `RuleGo` rule-chain DSL (JSON), while tasks, process instances and history are persisted to a relational database by the engine itself — no separate process middleware to deploy.

> Note: the DSL is a BPMN-style approval flow in JSON form; it does not parse BPMN 2.0 XML.

## Features

* **Rule chain as process:** the DSL is a `RuleGo` rule chain. Native nodes such as gateways…
