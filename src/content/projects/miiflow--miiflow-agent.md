---
repo: "MiiFlow/miiflow-agent"
name: "miiflow-agent"
description: "Lightweight Python SDK for LLMs with unified API across 9 providers. Built-in ReAct & Plan-Execute agents, streaming,   native tool calling, context injection, structured outputs, and observability."
readmeQualityOk: true
url: "https://github.com/MiiFlow/miiflow-agent"
homepage: "https://www.miiflow.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "ai-agents", "anthropic", "claude", "gemini", "langchain-alternative", "llm", "openai", "react-agent", "tool-calling"]
stars: 19
forks: 2
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-09-02T05:36:00Z"
lastCommitAt: "2026-10-31T01:59:42Z"
lastReleaseAt: "2026-03-02T09:58:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 55
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e52ca2b968fd18379f809cf7e8e962b27fdc545845a9ff13e352e73bed6e5234/MiiFlow/miiflow-agent"
---

---

A model call is easy. The hard part of an agent is the **harness** around it: the loop that decides when to call tools and when to answer, running those tools safely and in parallel, handing work to sub-agents, pausing for a human and resuming later, keeping a long run inside the context window, recovering when a provider errors, and streaming all of it to a UI.

**miiflow-agent is that harness, as a Python library.** It plays the same role as the Claude Agent SDK, but it is not tied to one model family: the same agent runs on Claude, GPT, Gemini or six other providers, and you can switch with one line. It runs Miiflow's production agent traffic.

```python
from miiflow_agent import Agent, AgentType, CallbackEventType, LLMClient, scoped_callbacks, tool

@tool("get_weather", "Current weather for a city", writes=False)
def get_weather(city: str) -> str:
    return f"18°C and clear in {city}"

@tool("book_table", "Reserve a restaurant table", writes=True)
def book_table(restaurant: str, time: str) -> str:
    return f"Booked {restaurant} at {time}"

agent = Agent(
    LLMClient.create("anthropic", model="claude-sonnet-5-5"),  # or "openai", "gemini", ...…
