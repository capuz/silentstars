---
repo: "whilehq/whileai-sdk"
name: "whileai-sdk"
description: "While Python SDK: trace ingest, agent simulations, grading, and training data for post-training"
readmeQualityOk: true
url: "https://github.com/whilehq/whileai-sdk"
homepage: "https://withwhile.com"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 12
forks: 1
openIssues: 31
closedIssues: 72
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-08-16T19:38:00Z"
lastCommitAt: "2026-09-19T08:14:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["jacobweiss2305", "github-actions[bot]", "sahana-dhar1"]
openGraphImageUrl: "https://opengraph.githubassets.com/42c46db20775361b0e57cfeee18d8861deac5625454b01b4fe732931fa313a40/whilehq/whileai-sdk"
---

<picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/whilehq/whileai-sdk/main/docs/assets/hero-dark.png">
    </picture>
  </a>
</p>

</p>

Building RL and SFT datasets for agents is hard. `whileai` is the library
that does it, and that measures whether training on them worked. Give it
an agent, or just the agent's tools and system prompt. It writes the
situations the agent might meet, runs the agent through them against a
fake world that fails on purpose, and hands back every conversation as a
row. You grade the rows with your own judge or a verifier. The package
then does the bookkeeping that is easy to skip and expensive to get wrong:
pass rates with intervals, difficulty bands for RL, a check that your judge
agrees with people, decontamination against your eval set, and a scan for
rewards the policy can game. Every method says where it comes from
([References](#references)).

```python
import whileai as wai

@wai.tool
def get_order(order_id: str) -> dict:
    """Look up an order by id."""  # the function is the tool; its signature is the schema
    ...

wai.configure(agent=wai.OpenAI("gpt-4.1-mini"),…
