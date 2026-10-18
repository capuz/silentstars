---
repo: "John-Rood/VectorVault"
name: "VectorVault"
description: "The first serverless vector database (2023). Stateless compute + object storage, open source Python. pip install vector-vault"
readmeQualityOk: true
url: "https://github.com/John-Rood/VectorVault"
homepage: "https://pypi.org/project/vector-vault/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["chatgpt-python", "generative-ai", "text-generation", "agentic", "agentic-ai", "agentic-framework", "agentic-rag", "agentic-workflow", "agents", "ai"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-05-20T01:55:15Z"
lastCommitAt: "2026-10-18T08:15:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 68
maintainers: ["John-Rood"]
openGraphImageUrl: "https://opengraph.githubassets.com/d58bf0dae5a429bffab916e3d6c1e82ee305dff87d985ced1efa041767613fd8/John-Rood/VectorVault"
---

# Vector Vault

**Build AI agents that think, remember, and act.** Start free on your machine. Scale to production with zero infrastructure.

## Start Free, Scale When Ready

Vector Vault gives you two ways to build:

**🏠 Local Mode (Free)** — Run entirely on your machine. No account needed. No limits. Perfect for learning, prototyping, and projects where your data stays local.

**☁️ Cloud Platform** — When you're ready for production, deploy to our Persistent Agentic Runtime (PAR). Sub-second responses, 99.9% uptime, visual workflow builder, and agents that can pause for days and resume instantly.

```bash
pip install vector-vault
```

## Quick Start (Local Mode)

No signup. No API keys (except OpenAI for embeddings). Just code.

```python
from vectorvault import Vault

# Create a local vault
vault = Vault(
    vault='my_knowledge_base',
    openai_key='YOUR_OPENAI_KEY',
    local=True  # Everything stays on your machine
)

# Add your data
vault.add("The mitochondria is the powerhouse of the cell")
vault.add("Neural networks are inspired by biological brains")
vault.add("Vector databases enable semantic search")
vault.get_vectors()
vault.save()

# Search by meaning, not keywords…
