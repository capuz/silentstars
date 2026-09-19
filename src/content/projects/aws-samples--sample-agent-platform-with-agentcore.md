---
repo: "aws-samples/sample-agent-platform-with-agentcore"
name: "sample-agent-platform-with-agentcore"
description: "Internal agent platform on Amazon Bedrock AgentCore: interactive Claude Code cloud workspaces + headless agent kernels behind one portal, with publishing, scheduling, channels, memory, evals and governance"
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-agent-platform-with-agentcore"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [48, 21]
topics: ["agent-platform", "agents", "amazon-bedrock", "aws", "bedrock-agentcore", "cdk", "claude", "claude-agent-sdk", "claude-code", "mcp"]
stars: 18
forks: 6
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-21T02:43:06Z"
lastCommitAt: "2026-09-19T01:38:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 50
maintainers: ["odinwang", "zzkamzn", "amazon-ospo-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c07689a51a60e234fd1a967d09d85a74154344a00c5ba69063ea65e741c36cf/aws-samples/sample-agent-platform-with-agentcore"
---

# Agent Platform with Amazon Bedrock AgentCore

A reference implementation of an **internal agent platform** built on
[Amazon Bedrock AgentCore](https://aws.amazon.com/bedrock/agentcore/).
It shows how a platform team can offer two hosting models behind one portal:

- **Interactive cloud workspaces** — launch a full Claude Code CLI inside an
  AgentCore Runtime and use it from a browser web terminal. The process lives
  in a persistent tmux session, so disconnecting or switching sessions keeps
  the conversation and in-flight work running; files and conversation history
  persist to S3 and survive container restarts.
- **Headless agent kernels** — publish Claude Agent SDK based agents as
  AgentCore Runtime endpoints that any application can invoke through a single
  `/invocations` contract.

Both kernels route model traffic through a configurable **LLM gateway**
(e.g. LiteLLM) with a **fixed egress IP** (VPC mode + NAT Gateway), so the
platform works in enterprises that enforce model allow-lists, budgets and
source-IP restrictions. The gateway key lives in a platform-side service and
**never enters a session container** — a session's user is root in its own
microVM, so a kernel…
