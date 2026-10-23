---
repo: "GAIK-project/gaik-toolkit"
name: "gaik-toolkit"
description: "Python toolkit providing reusable AI/ML utilities: schema extraction, structured outputs, and production-ready components"
readmeQualityOk: true
url: "https://github.com/GAIK-project/gaik-toolkit"
homepage: "https://gaik-project.github.io/gaik-toolkit/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 30]
stars: 102
forks: 20
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-10T14:05:17Z"
lastCommitAt: "2026-10-23T09:32:26Z"
lastReleaseAt: "2025-12-09T08:25:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 49
maintainers: ["laguagu", "kauttoj"]
openGraphImageUrl: "https://opengraph.githubassets.com/89cc783f9dc5d154a35485018e13bc361e6127e09fa55e44390de1f3ab015e5c/GAIK-project/gaik-toolkit"
discussionCount: 0
---

# GAIK – Generative AI Knowledge Management Toolkit

This is a generative AI toolkit of the GAIK project ([gaik.ai](https://gaik.ai)). It provides a complete set of components and guidance for building knowledge-centric GenAI solutions, from strategic directions to deployable implementations.

# Project Documentation

Project documentation is available at:

https://gaik-project.github.io/gaik-toolkit/

**Live Demo:** https://gaik-demo.2.rahtiapp.fi/

## Use different model providers

The Python toolkit provides one `ProviderClient` interface for OpenAI, Azure OpenAI,
Google Gemini and Vertex AI, Anthropic (direct or on Microsoft Foundry), CSC Aitta, and
other OpenAI-compatible servers.
LiteLLM is available as an optional backend (`pip install "gaik[llm-litellm]"`,
`get_llm_config("litellm", model="azure/...")`); the native adapters stay the default,
and Aitta and other compatible servers reuse the OpenAI SDK. Configure the provider with
`get_llm_config("azure")`, `get_llm_config("google")`, or `get_llm_config("aitta")` and
pass that config to supported components. Google/Vertex and Anthropic need the
`gaik[llm-google]` and `gaik[llm-anthropic]` extras. Capabilities such as…
