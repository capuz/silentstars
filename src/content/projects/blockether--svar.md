---
repo: "Blockether/svar"
name: "svar"
description: "Type‑safe LLM output for Clojure. Works with any text‑only model."
readmeQualityOk: true
url: "https://github.com/Blockether/svar"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [97]
topics: ["ai", "clojure", "llm", "structured-output"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-13T13:25:42Z"
lastCommitAt: "2026-09-11T08:14:48Z"
lastReleaseAt: "2026-04-20T20:27:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["kwojcik-blockether", "enajski", "michal-blockether"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ebf886a53ba83e6911b44aefbc3eded406f885f641cc0ab9721829ba9d3c9c9/Blockether/svar"
---

<h2 align="center">
</h2>

<i>svar</i> — "answer" in Swedish. Type-safe LLM output for Clojure, inspired by <a href="https://github.com/BoundaryML/baml">BAML</a>.
<br/>
<sub>Works with any text-producing LLM — no structured output support required.</sub>
</div>

  <h2>
    </a>
  </h2>
</div>

<h3>

[Rationale](#rationale) • [Functionalities](#functionalities) • [Quick Start](#quick-start) • [Router](#router) • [Usage](#usage) • [Spec DSL](#spec-dsl-reference)

</h3>
</div>

## Rationale

JSON Schema is the de facto way to get structured output from LLMs — but it's incomplete. Union types have poor cross-provider support, and the entire approach requires your LLM provider to support structured output mode. That rules out local models, smaller providers, and any setup where you just have a text completion endpoint.

SVAR takes a different approach: let the LLM produce plain text, then parse and correct the output post-step. This works with **any** text-producing LLM — OpenAI, Anthropic, local Ollama, vLLM, whatever you have. No provider lock-in, no feature flags, no "this model doesn't support JSON mode" surprises.

## Functionalities

| Category | Functions | Description |…
