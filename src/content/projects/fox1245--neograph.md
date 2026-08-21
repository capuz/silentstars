---
repo: "fox1245/NeoGraph"
name: "NeoGraph"
description: "C++ Graph Agent Engine Library — LangGraph for C++"
readmeQualityOk: true
url: "https://github.com/fox1245/NeoGraph"
homepage: "https://fox1245.github.io/NeoGraph/"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 9
forks: 2
openIssues: 31
closedIssues: 103
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-04-02T02:25:38Z"
lastCommitAt: "2026-08-21T04:11:05Z"
lastReleaseAt: "2026-08-14T12:15:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 62
maintainers: ["fox1245"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfa06eca981439d998f905a11b0be947bb756e0f9fe428bbacf132c26f0d336d/fox1245/NeoGraph"
---

<h1 align="center">NeoGraph</h1>
    <strong>The C++ graph agent engine — with Python bindings.</strong><br>
    LangGraph-level capabilities · 5&nbsp;µs engine overhead · one static binary that fits a Raspberry&nbsp;Pi.
  </p>
</p>

**Languages:** [English](https://github.com/fox1245/NeoGraph/blob/HEAD/README.md) | [한국어](https://github.com/fox1245/NeoGraph/blob/HEAD/README.ko.md) | [日本語](https://github.com/fox1245/NeoGraph/blob/HEAD/README.ja.md) | [简体中文](https://github.com/fox1245/NeoGraph/blob/HEAD/README.zh-CN.md)

</p>

</p>

---

  </a>
</p>

## What is NeoGraph?

NeoGraph is a **C++20 graph-based agent orchestration engine** that brings
LangGraph-level capabilities to C++. Define agent workflows as JSON, execute
them with parallel fan-out, checkpoint state for time-travel debugging and
human-in-the-loop, and plug in any LLM provider — all without Python.

```cpp
#include <neograph/neograph.h>
#include <neograph/llm/openai_provider.h>
#include <neograph/graph/react_graph.h>

auto provider = neograph::llm::OpenAIProvider::create({
    .api_key = "sk-...", .default_model = "gpt-4o-mini"
});
auto engine = neograph::graph::create_react_graph(provider, std::move(tools));…
