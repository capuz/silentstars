---
repo: "cacheplane/threadplane"
name: "threadplane"
description: "The open-source thread-plane for agents: chat, durable threads, persistence, human approvals, and generative UI for Angular, on LangGraph and AG-UI."
readmeQualityOk: true
url: "https://github.com/cacheplane/threadplane"
homepage: "https://threadplane.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["agents", "ai", "angular", "framework", "typescript"]
stars: 305
forks: 29
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-03-18T22:45:42Z"
lastCommitAt: "2026-10-21T23:36:55Z"
lastReleaseAt: "2026-08-29T17:54:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 34
maintainers: ["blove"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1185745318/35fd6408-ed2e-4b6f-8ac1-89e78d442a05"
---

<img
    src="https://threadplane.ai/assets/hero.svg"
    alt="Threadplane — the open-source thread-plane for Angular agents"
    width="100%"
  />

---

**Threadplane is the open-source thread-plane for Angular agents.** Chat, durable
threads, persistence, human approvals, tool progress, subagents, and generative UI — built on
Angular Signals and dependency injection, for Angular 20–22. Your backend stays
where it is: Threadplane adapts a LangGraph or AG-UI agent into a runtime-neutral
`Agent` contract that the UI consumes, and renders generated UI with the design
system components you already own.

`MIT · Angular 20–22 · no account, no cloud`

Experimental native React previews are available through the docs' **Example UI**
selector. The [AG-UI JSON Render preview](https://threadplane.ai/docs/ag-ui/guides/json-render?frontend=react)
uses the existing airline agent, six authored read-only views and native shared
state. These React packages remain private source builds; from a checkout, run
`npx nx build cockpit-ag-ui-json-render-react` and the matching `npx nx e2e` target.

---

## Install

```bash
npm install @threadplane/chat @threadplane/langgraph @langchain/core…
