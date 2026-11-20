---
repo: "Xocas12/hoi4-agent-harness"
name: "hoi4-agent-harness"
description: "Provider-neutral agentic harness for playing Hearts of Iron IV with an LLM: clock-owning turn loop, reflex/planner split, delta observations, swappable guidance packs."
readmeQualityOk: true
url: "https://github.com/Xocas12/hoi4-agent-harness"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "benchmark", "game-ai", "hearts-of-iron-4", "hoi4", "llm-agent", "paradox-interactive"]
stars: 5
forks: 2
openIssues: 11
closedIssues: 43
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-09-06T09:26:46Z"
lastCommitAt: "2026-11-20T11:59:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["xalv-alv", "Xocas12"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec1d94b18aa8e98e88c81a887f8251add55b0fb7707c54f5956eeccc6de0e26b/Xocas12/hoi4-agent-harness"
---

# hoi4-agent-harness

A skeleton harness for letting an LLM play **Hearts of Iron IV** — any LLM, through
one interface: Anthropic, OpenAI, anything OpenAI-compatible (Ollama, vLLM,
LM Studio, OpenRouter), Google Gemini, or a scripted stub that runs offline.

This is scaffolding, not a finished bot. The parts that are real are real and
tested; the parts that are stubs say so, in this README and in the file that
contains them.

```
git clone https://github.com/Xocas12/hoi4-agent-harness
cd hoi4-agent-harness && pip install -e ".[dev]"
hoi4-harness play --turns 20        # full offline run, no API key, no game needed
```

## The two problems this is built around

HOI4 is a real-time game with an enormous state space, and language models are
slow and priced per token. Those two facts kill the naive design — screenshot the
screen every second, ask a model what to do — before it starts. Two mechanisms
answer them.
