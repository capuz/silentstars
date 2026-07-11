---
repo: "luckymaomi/kitty"
name: "kitty"
description: "Kitty Agent, a teaching level for agent design."
originalDescription: "kitty agent，智能体设计的教学关卡。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/luckymaomi/kitty"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T06:15:49Z"
lastCommitAt: "2026-07-11T05:56:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["luckymaomi", "CHCH-debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/15c4726ba8c6fbb6a63a326ba97c32126cb9e5b29d1955266d5b1e06452b10ba/luckymaomi/kitty"
---

# Kitty Agent

Official website: https://luckymaomi.github.io/kitty/

  <strong>🐾 How an Agent is Designed: Starting from the tool loop, assembled into an agent that can complete tasks.</strong>
</p>

</p>

## How an Agent is Assembled

Kitty is an agent. It uses a set of directly executable implementations to demonstrate how an agent evolves from the initial tool loop to gradually acquire memory, context, planning, and collaboration capabilities.

The model first judges, calls tools, and reads tool results in the tool loop, then continues to judge based on new facts. The session retains the confirmed state of this round; `AGENTS.md` and skills provide long-term rules and proficient practices; context assembles this information and user input into a complete input that the model can understand for the next round. Complex tasks are broken down into To Do items, advancing only one step at a time; when independent investigation is needed, sub-agents complete their work in their own loops and return the results to the main agent.

This allows an agent to search, understand, modify, run, remember, and continue to complete long tasks in real projects.

## ⚡ Quick Start

Global…
