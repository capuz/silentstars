---
repo: "WPSemantix/langchain-timbr"
name: "langchain-timbr"
description: "Timbr LLM SDK is a Python SDK that extends LangChain and LangGraph with custom agents, chains, and nodes for seamless integration with the Timbr semantic layer. It enables converting natural language prompts into optimized semantic-SQL queries and executing them directly against your data."
readmeQualityOk: true
url: "https://github.com/WPSemantix/langchain-timbr"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-08-21T11:29:45Z"
lastCommitAt: "2026-11-06T12:17:53Z"
lastReleaseAt: "2025-10-27T12:31:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 55
maintainers: ["amitwps", "wpbarco", "semantiDan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1042030071/f5e04afe-af74-4f87-a428-c251a31c1d2f"
---

# Timbr LangChain LLM SDK

Timbr LangChain LLM SDK is a Python SDK that extends LangChain and LangGraph with custom agents, chains, and nodes for seamless integration with the Timbr semantic layer. It enables converting natural language prompts into optimized semantic-SQL queries and executing them directly against your data.

## Dependencies

- Access to a timbr-server
- Python 3.10 or newer

### Python 3.14 note

> IMPORTANT for Python 3.14 users
>
> Python 3.14 currently has partial support.
> Base package installation is supported, but some optional provider extras may
> still be unavailable on 3.14 due to upstream package constraints.
>
> If an extras install fails on 3.14, install the base package first:
>
> `python -m pip install langchain-timbr`

## Installation

### Using pip

```bash
python -m pip install langchain-timbr
```

### Install with selected LLM providers

#### One of: openai, anthropic, google, azure_openai, snowflake, databricks, vertex_ai, bedrock (or 'all')

```bash
python -m pip install 'langchain-timbr[<your selected providers, separated by comma w/o space>]'
```

### Using pip from github

```bash
pip install…
