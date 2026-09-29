---
repo: "dovvnloading/Cortex"
name: "Cortex"
description: "Local-first Windows desktop AI chat. Runs models through Ollama or its own managed llama.cpp runtime (GGUF files). Nothing leaves your machine; model-proposed code runs only in a restricted Python sandbox after you approve it."
readmeQualityOk: true
url: "https://github.com/dovvnloading/Cortex"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 26]
topics: ["ai", "app", "chatbot", "llm", "local-llm", "python", "agentic", "ollama", "build-tool", "coding-agent"]
stars: 37
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-09T22:42:53Z"
lastCommitAt: "2026-09-29T10:04:48Z"
lastReleaseAt: "2026-01-20T20:50:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["dovvnloading"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cb0461ff7dcae6029bd43496c588c48b0009063abab5a108017f662d64b48de/dovvnloading/Cortex"
discussionCount: 0
---

# Cortex

Cortex is a local-first AI workspace for Windows. It runs models on the machine
-- either through Ollama or by loading a local `.gguf` file with its own managed
llama.cpp runtime -- keeps conversations and memory in local storage, and
presents the React/TypeScript interface inside a Python-owned pywebview/WebView2
window. The normal launcher owns the backend, native window, and any development
frontend process; Cortex does not open the user's installed browser.

## The workspace

The interface is deliberately small: a chat library, a focused transcript, a
composer with a local model picker, and settings for model, memory, appearance,
and execution controls.

Every response carries its own footer -- timestamp, token count, and tokens per
second -- with copy, regenerate, and fork controls that appear on hover.

Reasoning and sources stay out of the answer body until asked for, each as its
own disclosure beneath the response:

### Models and runtimes

Cortex lists models installed through Ollama alongside any `.gguf` files in the
local models folder, each with the parameter size, quantization, and context
length read from the model itself. A GGUF can be fetched by Hugging…
