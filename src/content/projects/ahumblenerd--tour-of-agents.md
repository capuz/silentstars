---
repo: "ahumblenerd/tour-of-agents"
name: "tour-of-agents"
description: "A 30-minute course to get up to speed on how AI  agents actually work"
url: "https://github.com/ahumblenerd/tour-of-agents"
homepage: "https://tinyagents.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "ai-agents", "autogen", "crewai", "interactive", "langchain", "llm", "pyodide", "python", "tutorial"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T14:24:18Z"
lastCommitAt: "2026-07-04T19:18:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 33
maintainers: ["ahumblenerd"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6883bc86f3fafe518e8d24b7d9506c7d6dfff16a044cab73e62e4ac138fbfd9/ahumblenerd/tour-of-agents"
---

# A Tour of Agents

> Build an AI agent from scratch in 60 lines of Python. Interactive course, runs in your browser, no install, no framework.

**[→ Start the course at tinyagents.dev](https://tinyagents.dev?utm_source=github&utm_medium=readme&utm_campaign=repo)**

## What this is

An interactive course that teaches how an AI agent actually works by building one — line by line, in plain Python, with no framework. Nine lessons. Roughly sixty lines of code at the end. Everything runs in your browser via Pyodide (CPython compiled to WebAssembly), so there is nothing to install.

After lesson 1 you have an agent that can call an LLM. After lesson 9 you have a complete agent — tool calling, the agent loop, conversation history, structured state, persistent memory, input/output guardrails, and a self-scheduling task queue — composed into ~60 lines of Python with no dependencies beyond `json`.

The same patterns are what LangChain's `AgentExecutor`, CrewAI's `Crew`, AutoGen's `ConversableAgent`, and OpenAI's Agents SDK wrap. Every lesson shows the raw HTTP request, the data structure under the abstraction, and what each framework adds on top.

## What this is *not*

Not [Tiny…
