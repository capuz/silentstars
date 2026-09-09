---
repo: "SamuelFrost/super_projects"
name: "super_projects"
description: "A containerized parent-directory environment for software development teams. This enables teams to share development environment configuration setups easily."
readmeQualityOk: true
url: "https://github.com/SamuelFrost/super_projects"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [52, 48]
stars: 9
forks: 0
openIssues: 16
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-18T14:43:07Z"
lastCommitAt: "2026-09-09T08:19:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 69
undervaluedScore: 27
maintainers: ["SamuelFrost"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b13d2ff6661dc63ee38c86d44eb3fba8fd704ad823abedc43e41d19eefd4386/SamuelFrost/super_projects"
discussionCount: 1
---

# super_projects

A containerized parent-directory environment for software development teams.

Fork this repository for your company, place your fork where you would normally keep your projects directory, and open it in VS Code or Cursor to get a fully configured development container your whole team can share.

## What this is

`super_projects` is designed to be your projects' parent directory. Rather than configuring each developer's machine individually, the dev environment (Docker, IDE settings, AI tooling) is codified here and shared via git.

It is a template meant to be forked once per company (or team), customized, and shared across the organization:

1. **Fork** this repo for your company.
2. **Rename** the container and related identifiers immediately — see [Forking for your company](#forking-for-your-company).
3. **Customize** the agent setups and tools to match your company's needs.
4. Developers clone the company fork where they keep their projects; individual project repositories live inside it as untracked subdirectories.

Each company maintains its own version of the Docker image, devcontainer settings, agent setups, and IDE extensions — so every developer gets an…
