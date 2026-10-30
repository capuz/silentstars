---
repo: "Alpha-Park/genpark-growth-agent"
name: "genpark-growth-agent"
description: "Omnichannel marketing and SEO automation engine."
readmeQualityOk: true
url: "https://github.com/Alpha-Park/genpark-growth-agent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ai-agent", "automation", "developer-tools", "genpark", "mcp", "mcp-server", "model-context-protocol", "openclaw", "production-ready"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-20T10:19:17Z"
lastCommitAt: "2026-10-30T11:02:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 16
maintainers: ["alphaparkinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/39609f963d27159ba33923264e235ea7aa87e59220fac261fda48b518f5dfdc1/Alpha-Park/genpark-growth-agent"
---

# genpark-growth-agent

GenPark Growth Agent is a zero-dependency quantitative growth engineering and experimentation engine implementing viral branching process epidemic modeling ($K$-factor), SaaS cohort retention and CAC payback decay analysis, and Wald's Sequential Probability Ratio Test (SPRT) for continuous A/B test early stopping.

```mermaid
flowchart TD
    A[Invites per User & Conversion] --> B[Branching Process K-Factor Engine]
    B --> C[Viral Cascade Simulation]
    D[ARPU, Churn & Gross Margin] --> E[Cohort Retention Decay Model]
    E --> F[LTV/CAC Ratio & Payback Period]
    G[Continuous Conversion Stream] --> H[Wald SPRT Log-Likelihood Ratio]
    H --> I[Early Stopping Boundary: Accept/Reject/Continue]
```

## Features
- **Branching Viral Modeling**: Calculates exact geometric cascade curves and super/sub-critical thresholds ($K = i \times c$).
- **SaaS Unit Economics**: Models cohort retention decay curves, net lifetime value ($LTV = ARPU \cdot Margin / Churn$), and CAC payback months.
- **Wald's SPRT Early Stopping**: Minimizes experimentation sample size and sample waste by terminating continuous A/B tests immediately upon significance.

## Quickstart…
