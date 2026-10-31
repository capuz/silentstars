---
repo: "ericmjl/llamabot"
name: "llamabot"
description: "Pythonic class-based interface to LLMs"
readmeQualityOk: true
url: "https://github.com/ericmjl/llamabot"
homepage: "https://ericmjl.github.io/llamabot/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["cli", "large-language-models", "llm", "python"]
stars: 183
forks: 35
openIssues: 23
closedIssues: 45
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2023-04-03T17:53:50Z"
lastCommitAt: "2026-10-31T19:00:52Z"
lastReleaseAt: "2023-09-30T13:24:26Z"
status: "thriving"
tags: ["funded"]
healthScore: 86
undervaluedScore: 42
maintainers: ["ericmjl", "dependabot[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/9caffacccec82580f179272ca15db855ddc74444dcafbc84bf2a8b28eff5bb29/ericmjl/llamabot"
fundingLinks: ["GITHUB:https://github.com/ericmjl", "PATREON:https://patreon.com/ericmjl"]
discussionCount: 5
---

# LlamaBot: A Pythonic bot interface to LLMs

LlamaBot implements a Pythonic interface to LLMs,
making it much easier to experiment with LLMs in a Jupyter notebook
and build Python apps that utilize LLMs.
All models supported by [LiteLLM](https://github.com/BerriAI/litellm) are supported by LlamaBot.

## Install LlamaBot

To install LlamaBot:

```python
pip install llamabot==0.17.11
```

This will give you the minimum set of dependencies for running LlamaBot.

To install all of the optional dependencies, run:

```python
pip install "llamabot[all]"
```

## Get access to LLMs

### Option 1: Using local models with Ollama

LlamaBot supports using local models through Ollama.
To do so, head over to the [Ollama website](https://ollama.ai) and install Ollama.
Then follow the instructions below.

### Option 2: Use an API provider

#### OpenAI

If you have an OpenAI API key, then configure LlamaBot to use the API key by running:

```bash
export OPENAI_API_KEY="sk-your1api2key3goes4here"
```

#### Mistral

If you have a Mistral API key, then configure LlamaBot to use the API key by running:

```bash
export MISTRAL_API_KEY="your-api-key-goes-here"
```

#### Other API providers

Other API…
