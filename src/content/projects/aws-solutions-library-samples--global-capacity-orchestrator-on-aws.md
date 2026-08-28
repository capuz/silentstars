---
repo: "aws-solutions-library-samples/global-capacity-orchestrator-on-aws"
name: "global-capacity-orchestrator-on-aws"
description: "GCO is a platform that spins up EKS Auto Mode clusters across AWS regions, wired together with Global Accelerator for low-latency routing. It handles multi-region compute orchestration — capacity-aware scheduling, spot fallback, globally distributed autoscaling inference — and offers a REST API, CLI, MCP and an integrated analytics environment"
readmeQualityOk: true
url: "https://github.com/aws-solutions-library-samples/global-capacity-orchestrator-on-aws"
homepage: "https://docs.aws.amazon.com/solutions/eks-automode-clusters-with-global-capacity-orchestrator-on-aws/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 44
forks: 11
openIssues: 0
closedIssues: 56
watchers: 1
contributors: 54
recentReleases: 0
createdAt: "2026-04-23T18:47:27Z"
lastCommitAt: "2026-08-28T15:33:42Z"
lastReleaseAt: "2026-04-30T15:49:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["Jmevorach", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bd17cacd08fc99388724e3b1542ba25499e0fc9184e996717ed6af85dbe8af8/aws-solutions-library-samples/global-capacity-orchestrator-on-aws"
---

<h1>Guidance for EKS AutoMode Clusters with<br><em>Global Capacity Orchestrator</em> on AWS</h1>

<p><b><i>One API. Every Accelerator. Any Region.</i></b></p>

<p><b>Global Capacity Orchestrator (GCO)</b>: multi-region accelerated-compute orchestration for AWS — NVIDIA GPUs, <a href="https://aws.amazon.com/ai/machine-learning/trainium/">AWS Trainium</a>, <a href="https://aws.amazon.com/ai/machine-learning/inferentia/">AWS Inferentia</a>, and CPU (amd64 + arm64 / <a href="https://aws.amazon.com/pm/ec2-graviton/">Graviton</a>) — with capacity-aware placement workflows, spot fallback, and autoscaling inference endpoints. Commercial <code>aws</code> deployments add automatic failover and latency-aware routing through one <a href="docs/API.md">API</a>; other partitions (<code>aws-cn</code> and <code>aws-us-gov</code>) use <a href="https://aws.amazon.com/iam/">IAM</a>-authenticated regional workload APIs, all through the same <a href="docs/CLI.md">CLI</a> and <a href="gco_mcp/README.md">MCP server</a>.</p>

<p>
</p>

<details>
<summary>🎬 Live demo recording</summary>

*`gco` CLI demo: capacity discovery, cost visibility, 5 schedulers ([Volcano](https://volcano.sh/),…
