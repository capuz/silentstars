---
repo: "malevrigns/agent-jev"
name: "agent-jev"
description: "AgentJev-0.6B - a fast 'System One' decision model for AI Agents: feed it any unstructured state (diffs, traces, logs) and structured questions, get calibrated probability distributions back in one ~50ms forward pass. Zero output-token decoding."
readmeQualityOk: true
url: "https://github.com/malevrigns/agent-jev"
language: "Python"
languages: ["Python"]
languagePcts: [68]
topics: ["ai", "ai-agents", "ai-tools", "jev", "jev-model"]
stars: 394
forks: 40
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2026-09-21T16:24:42Z"
lastCommitAt: "2026-10-23T09:33:26Z"
lastReleaseAt: "2026-10-01T14:34:08Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 27
maintainers: ["malevrigns", "zkmluck", "dajiaohuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1bf55a9b3718374e4985d04a63c07bba12666ee2f9044e284cd2c8452767b41/malevrigns/agent-jev"
---

Weights: <a href="https://huggingface.co/aimeigaoshou/agent-jev">https://huggingface.co/aimeigaoshou/agent-jev</a>
  &nbsp;·&nbsp; Website: <a href="https://malevrigns.github.io/agent-jev/">https://malevrigns.github.io/agent-jev/</a>

  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;
  &nbsp;&nbsp;·&nbsp;&nbsp;

AgentJev-0.6B does not write. You hand it a state and questions you have already phrased. One forward pass returns a probability for every option. The number of decoded tokens is zero.

Put it where an agent loop needs a gate, a route, or a score. Leave the prose to a larger model.

---

## The job

A coding agent, a triage bot, or a workflow spends most of its steps on questions that are not writing problems. Did the tests pass. Which tool is next. Is this command safe to run. The usual answer is to ask a 27B–70B model to talk its way to a boolean, then parse the talk.

| | A writer, used as a switch | AgentJev |
| --- | --- | --- |
| Output | Text you hope is JSON | A distribution over options you supplied |
| Decode | One token at a time | None |
|…
