---
repo: "awslabs/stickler"
name: "stickler"
description: "A library for evaluating structured data and AI outputs with weighted field comparison and custom comparators"
readmeQualityOk: true
url: "https://github.com/awslabs/stickler"
homepage: "https://awslabs.github.io/stickler/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 52
forks: 58
openIssues: 116
closedIssues: 137
watchers: 0
contributors: 43
recentReleases: 2
createdAt: "2025-10-07T17:52:33Z"
lastCommitAt: "2026-11-17T14:33:13Z"
lastReleaseAt: "2026-09-14T17:16:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 66
maintainers: ["sromoam", "harrycav", "mangeshraut712"]
openGraphImageUrl: "https://opengraph.githubassets.com/780542c677b0dada47c1c302cac89a26cfb6b4a92142402934afb1475b0ac8e1/awslabs/stickler"
discussionCount: 4
---

# Stickler: Structured Object Evaluation for GenAI

When in the course of human events, it becomes necessary to evaluate structured outputs from generative AI systems, we must acknowledge that traditional evaluation treats all fields equally. But **not all fields are created equal**.

**Stickler is a Python library that enables complex structured JSON comparison and evaluation** that lets you focus on the fields your customer actually cares about, to answer the question: "Is it doing a good job?" 

Stickler uses specialized comparators for different data types: exact matching for critical identifiers, numeric tolerance for currency amounts, semantic similarity for text fields, fuzzy matching for names and addresses, and IoU-based matching for bounding boxes. You can build custom comparators for domain-specific logic. The Hungarian algorithm ensures optimal list matching regardless of order, while the recursive evaluation engine handles unlimited nesting depth. Business-weighted scoring reflects actual operational impact, not just technical accuracy.

Consider an invoice extraction agent that perfectly captures shipment numbers (which must be exact or packages get routed to the…
